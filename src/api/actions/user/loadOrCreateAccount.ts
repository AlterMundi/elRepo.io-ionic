import api from "../../httpHandler"
import { saveCredentials, getCredentials, credentials } from "../../../helpers/localStorage"
import { createUser } from "./createUser"
import { login } from "./login"

export const loadOrCreateUser = async(loginCredentials?: credentials):Promise<string> => {
    //Ignore if api is logged in
    if (api.isLogged()) return api.state.user.mLocationId

    //Try to login if creadentials are explicit
    if (loginCredentials) return login(loginCredentials)

    //Try to load credentails from localStorage
    loginCredentials = getCredentials();
    if(loginCredentials) return loadOrCreateUser(loginCredentials)

    //If no credentials were explicit or saved user data was found I create a new user
    loginCredentials = await createUser()
    saveCredentials(loginCredentials)

    return loginCredentials.account
}
