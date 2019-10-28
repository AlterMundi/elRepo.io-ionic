import api from "../../httpHandler"

export interface forumInput {
    title: string,
    categories: Array<string>,
    description: string,
    files: Array<string>,
    image: string,
    identityId: string
}

interface Forum {
    mGroupName: string
}

export const createMessage = async({
    title,
    categories,
    description,
    files,
    image,
    identityId
}:forumInput) => {
    
    /* TODO: Handle cattegories, image and file */

    const { rsGxsForums } = api.endpoints()
    const {forums} = await rsGxsForums.getForumsSummaries()
    
    const forumId = forums.find((forum:Forum) => forum.mGroupName === api.state.user.mLocationName).mGroupId
    
    const data = await rsGxsForums.createPost({
        title,
        forumId,
        mBody: description,
        authorId: identityId
    })

    if (!data.retval) {
        throw(new Error(data.errorMessge))
    }
    
    return data
}
