/*import { loadDiscoveryMode } from "./loadDiscoveryMode"*/
import api from "../../httpHandler"
import { location } from "../../types"

export const handleDiscovery = async() => {
    try {
        const { getDiscoveredPeers } = api.endpoints().rsBroadcastDiscovery
        const { retval }= await getDiscoveredPeers()
        if (Array.isArray(retval)) {
            //TODO 
            /*
            const { autoPeering } = loadDiscoveryMode()
            if (autoPeering) { -- add as permanet peer -- }
            */
            return { peers: retval.filter((loc: location) => loc.mLocationName.indexOf('repo_') !== -1) }
        }
        return { error: 'Discovery not work', peers: []}
    } catch {
        return { error: 'Discovery not work', peers: []}
    }
}