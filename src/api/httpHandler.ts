import EventSource from './events';
import Base64 from '../helpers/base64';
import uuid from 'uuid/v4';
import { endpoints } from './endpoints';
import { basicResponse, apiRequest, apiState } from './types'

let requestList = new Map();

const logRequest = (type: string, data: any) => {
    //Only for debug
    console.log('API '+ type + JSON.stringify({data}))
}

const pullRequest = ()  => {
    if(requestList.size > 0) {
        requestList.values().next().value.callRequest()
    }
}

const apiHttp = (
        url: string,
        path: string,
        data: object,
        method: string,
        headers: Headers
    ) => new Promise<basicResponse>((res, rej) => { 
        const id = uuid();
        logRequest('NEW', id)
        requestList.set(id, { callRequest : () => {
            logRequest('CALLING', {path, data, method, headers})
            fetch(`${url}${path}`, { headers, method, body: data? JSON.stringify(data): undefined})
                .then(result => { 
                    requestList.delete(id)
                    return  result.json()
                })
                .then((data) => {
                    res(data)
                    logRequest('RESULT', {id, data})
                    pullRequest()
                })
                .catch(e => {
                    rej(e)
                    requestList.delete(id)
                    pullRequest()
                })
        }
    })

    if(requestList.size === 1) {
        requestList.values().next().value.callRequest()
    }
})


const api = {
    state: {
        url:'http://127.0.0.1',
        port: '9092',
        login: false,
        user: {
            mLocationId: '',
            mLocationName: ''
        },
        password: ''
    },
    isLogged: () => api.state.login,
    setState: (state: apiState) => {
        api.state = Object.assign({}, api.state, state)
        dispatchEvent(new Event('apiChange'))
    },
    getUrl: () => api.state.url+':'+api.state.port,
    getBtoa: () => 'Basic ' + Base64.btoa(api.state.user.mLocationId + ":" + api.state.password),
    send:({ path, data, method }:apiRequest) =>  {
        let headers = new Headers()
        //Add auth headers
        if (api.isLogged()) {
            headers.set('Authorization', api.getBtoa())
        }
        return apiHttp(api.getUrl(), path, data, method || 'POST', headers)
    },
    sendEvent: ({ path, data }:apiRequest) => {
        const evtSource = new EventSource(api.getUrl()+path, {
            data,
            headers: {
                'Authorization': api.getBtoa()
            }
        });
        return Promise.resolve(evtSource);
    },
    endpoints: () => endpoints(api.send)
};

export default api;