import api from "../../httpHandler"
import { credentials } from "../../../helpers/localStorage"
import { location } from "../../types"

export const login = async({account, password}: credentials):Promise<string> => {
    const { attemptLogin } = api.endpoints().rsLoginHelper
    const { retval, errorMessge }  = await attemptLogin({ account, password })
    if (retval) {
        const { locations }: {locations: Array<location>} = await api.endpoints().rsLoginHelper.getLocations()
        api.setState({
            user:locations.find(loc => loc.mLocationId === account  ),
            password,
            login: true,
        })
        return account
    }
    throw(new Error(errorMessge))
}
