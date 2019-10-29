import api from "../../httpHandler"

export const createForum = async(name:string, id?: string) => {
    const { rsGxsForums } = api.endpoints()
    const forumData = { 
        name,
        authorId: id? id : api.state.user.mLocationId
    };

    const data = await rsGxsForums.createForumV2(forumData)
    if (!data.retval) {
        throw(new Error(data.errorMessage))
    }
    return data
}

export const createUserForum = () => {
    return createForum(api.state.user.mLocationName)
}