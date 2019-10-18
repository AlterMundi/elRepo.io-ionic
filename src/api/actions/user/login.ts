import api from "../../httpHandler"
import { Credentials } from "../../../helpers/localStorage"
import { location } from "../../types"

export const login = async({account, password}: Credentials):Promise<string> => {
    const { attemptLogin } = api.endpoints().rsLoginHelper
    const { retval }  = await attemptLogin({ account, password })
    if (retval !== 3) {
        const { locations }: {locations: Array<location>} = await api.endpoints().rsLoginHelper.getLocations()
        api.setState({
            user:locations.find(loc => loc.mLocationId === account  ),
            password,
            login: true,
        })
        return account
    }
    throw(new Error('Wrong credentials'))
}
