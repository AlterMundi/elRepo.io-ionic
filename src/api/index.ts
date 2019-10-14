import EventSource from './events';
import Base64 from '../helpers/base64';
import uuid from 'uuid/v4';

let requestList = new Map();

const logRequest = (type: string, data: any) => {
    //Only for debug
    console.log('API ', type, data)
}

const pullRequest = ()  => {
    requestList.size
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
    ) => new Promise((res, rej) => { 
        const id = uuid();
        logRequest('NEW', id)
        requestList.set(id, { callRequest : () => {
            logRequest('CALLING', {path, data, method, headers})
            fetch(`${url}${path}`, { headers, method, body: data? JSON.stringify(data): undefined})
                .then(result => { 
                    requestList.delete(id)
                    return  result.json()
                })
                .then(data => {
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

interface apiState {
    url?: string,
    port?: string,
    login?: boolean,
    user?: {
        mLocationId: string
    },
    password?: string
}

interface apiRequest {
    payload: {
        path: string,
        data: object,
        method?: string
    }
}

const api = {
    state: {
        url:'',
        port: '',
        login: false,
        user: {
            mLocationId: ''
        },
        password: ''
    },
    isLogged: () => api.state.login,
    setState: (state: apiState) => api.state = api.state = {...api.state, ...state},
    getUrl: () => api.state.url+':'+api.state.port,
    getBtoa: () => Base64.btoa(api.state.user.mLocationId + ":" + api.state.password),
    send: (version: string, { payload }:apiRequest) =>  {
        const { path, data, method } = payload;
        if(version === 'api') {
            let headers = new Headers()
            //Add auth headers
            if (api.isLogged()) {
                headers.set('Authorization', 'Basic ' + api.getBtoa())
            }
            return apiHttp(api.getUrl(), path, data, method || 'POST', headers)
        }
        else if(version === 'stream') {
            const evtSource = new EventSource(api.getUrl()+path, {
                data,
                headers: {
                    'Authorization': 'Basic ' + api.getBtoa()
                }
            });
            return Promise.resolve(evtSource);
        }
    }
};

export default api;