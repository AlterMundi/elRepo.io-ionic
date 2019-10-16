import api from "../../httpHandler"
import { credentials } from "../../../helpers/localStorage"

export const login = async({account, password}: credentials):Promise<string> => {
    const { attemptLogin } = api.endpoints().rsLoginHelper
    const { retval, errorMessge } = await attemptLogin({ account, password })
    if (retval) {
        api.setState({
            user:{
                mLocationId:account
            },
            password,
            login: true,
        })
        return account
    }
    throw(new Error(errorMessge))
}
