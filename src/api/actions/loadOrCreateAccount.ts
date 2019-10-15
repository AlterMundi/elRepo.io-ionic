import api from "../httpHandler"
import uuid from 'uuid/v1'
import { createUserChannel } from "./createChannel"
import { createUserForum } from "./createForum"

export const loadOrCreateUser = async(account?:string, password?:string):Promise<string> => {
    const { rsLoginHelper } = api.endpoints()
    
    //Ignore if is logged
    if (api.isLogged()) {
        return api.state.user.mLocationId
    }

    //Login if creadentials are explicit
    if (account && password) {
        const data = await rsLoginHelper.attemptLogin({ account, password })
        if (data.retval) {
            return account
        }
        throw(new Error(data.errorMessge))
    }

    //Try to load localStorage
    try {
        let rawCredentials = window.localStorage.getItem('rsCredentials');
        if (rawCredentials) {
            let { account, password } = JSON.parse(rawCredentials);
            return await loadOrCreateUser(account, password)
        }
    } catch(e) {
        throw(e);
    }

    //Create new account as default action
    account = 'repo_' + uuid()
    password = uuid()
    const userCredentials = {
        location: {
            mPgpName: account,
            mLocationName: account
        },
        password: password,
        makeHidden: false,
        makeAutoTor: false
    }

    const data = await rsLoginHelper.createLocation(userCredentials)
    if (!data.retval) {
        throw(new Error(data.errorMessge))
    }
    api.setState({ user: data.location, password: password, login: true })

    //Create user channel and forum
    createUserChannel()
    createUserForum()

    //Save in localStorage
    window.localStorage.setItem('rsCredentials', JSON.stringify({account, password}))

    return data.location.mLocationId;
}
