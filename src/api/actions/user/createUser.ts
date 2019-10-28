import api from "../../httpHandler"
import uuid from 'uuid/v1'
import { createUserChannel } from "../messages/createChannel"
import { createUserForum } from "../messages/createForum"
import { login } from "./login"
import { Credentials } from "../../../helpers/localStorage"
import { createIdentity } from "./manageIdentity"

export const createUser = async():Promise<Credentials> => {
    const { createLocation } = api.endpoints().rsLoginHelper
    const accountName = 'repo_' + uuid()
    const password = uuid()
    
    const userCredentials = {
        location: {
            mPgpName: accountName,
            mLocationName: accountName
        },
        password: password,
        makeHidden: false,
        makeAutoTor: false
    }

    const { retval, errorMessge, location } = await createLocation(userCredentials)
    if (!retval) throw(new Error(errorMessge))

    //Create user channel and forum
    let credentials:Credentials = { account: location.mLocationId, password }
    await login(credentials)
    await createUserChannel()
    await createUserForum()
    await createIdentity('Public')
    return credentials
}
