import api from "../../httpHandler"

export interface MessageDescription {
    description: string,
    owner: boolean,
    author: string,
    publish: number
}



export const getMessage = async(forumId: string ,postId: string): Promise<MessageDescription> => {
    if (!forumId || !postId) throw new Error('forumId and postId are required');

    const { getForumContent } = api.endpoints().rsGxsForums
    const { isOwnId, getIdDetails } = api.endpoints().rsIdentity
    const { msgs } = await getForumContent({forumId, msgsIds: [postId]})
    
    if(msgs && msgs.length === 0)  throw new Error('Message not found');
    const { mMsg, mMeta } = msgs[0]

    const {retval} = await isOwnId({ id:mMeta.mAuthorId })
    const { details } = await getIdDetails({ id:mMeta.mAuthorId })
    return {
        description: mMsg,
        owner: retval,
        author: details.mNickname,
        publish: mMeta.mPublishTs * 1000
    }
}