import api from "../../httpHandler"

export const createChannel = async(name:string) => {
    const { rsGxsChannels } = api.endpoints()
    const groupData = {
        channel: {
            mAutoDownload: true,
            mMeta: {
                mGroupName: name,
                mGroupFlags: 4,
                mSignFlags: 520,
            }
        }
    };

    const data = await rsGxsChannels.createChannel(groupData)
    if (!data.retval) {
        throw(new Error(data.errorMessge))
    }
    return data.channel
}

export const createUserChannel = () => {
    return createChannel(api.state.user.mLocationName)
}