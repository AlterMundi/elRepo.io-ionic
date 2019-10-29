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
    mGroupName: string,
    mAuthorId: string,
    mGroupId: string,
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

    const { getForumsSummaries, createPost } = api.endpoints().rsGxsForums
    const {forums}:{forums:Forum[]} = await getForumsSummaries()
    
    const { mGroupId } = forums.find(forum => forum.mAuthorId === identityId) || {}

    const data = await createPost({
        title,
        forumId: mGroupId,
        mBody: description,
        authorId: identityId,
        mPublishTs: Date.now()
    })

    if (!data.retval) {
        throw(new Error(data.errorMessage))
    }
    
    return data
}
