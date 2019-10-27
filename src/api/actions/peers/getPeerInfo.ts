import api from "../../httpHandler"

export const getPeerInfo = async(peerId: string) => {
    const { getPeerDetails } = api.endpoints().rsPeers
    return await getPeerDetails({ sslId: peerId })
}

export const getPeerStatus = async(peerId: string) => {
    const { isOnline } = api.endpoints().rsPeers
    return await isOnline({ sslId: peerId })
}