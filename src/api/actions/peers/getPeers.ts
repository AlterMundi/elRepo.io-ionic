import api from "../../httpHandler"

export const getPeers = async() => {
    try {
        const { rsPeers } =  api.endpoints()
        const { sslIds }:{sslIds:string[]} = await rsPeers.getFriendList()
        return sslIds || []
    } catch {
        return []
    }
}