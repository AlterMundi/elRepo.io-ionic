import api from "../httpHandler"

export const createForum = async(name:string) => {
    const { rsGxsForums } = api.endpoints()
    const forumData = { name };

    const data = await rsGxsForums.createForumV2(forumData)
    if (!data.retval) {
        throw(new Error(data.errorMessge))
    }
    return data
}

export const createUserForum = () => {
    return createForum(api.state.user.mLocationName)
}