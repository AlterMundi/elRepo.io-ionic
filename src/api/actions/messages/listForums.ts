import api from "../../httpHandler"
import { ForumRS } from "../../types";

export interface Forum {
    name: string,
    id: string,
    authorId: string,
    messagesCount: number,
    lastPublish: number
}

const filterAndFormatForums = (forums:ForumRS[]):Forum[] =>
    forums
        //Only repo forums
        .filter(forum => forum.mGroupName.includes('repo_'))
        //Only subscrived ones
        .filter(forum => forum.mSubscribeFlags === 7)
        //Format response
        .map(forum => ({
            name: forum.mGroupName.split('repo_')[1],
            id: forum.mGroupId,
            authorId: forum.mAuthorId,
            messagesCount: forum.mVisibleMsgCount,
            lastPublish: forum.mLastPost
        }));

export const listForums = async() => {
    const { getForumsSummaries } = api.endpoints().rsGxsForums
    
    const { forums, retval, errorMessage } = await getForumsSummaries()
    if (!retval) {
        throw(new Error(errorMessage))
    }

    return filterAndFormatForums(forums)
}

export const listPosts = async(forumId: string) => {
    if (!forumId) throw new Error('forumId is required');

    const { getForumMsgMetaData } = api.endpoints().rsGxsForums
    const {msgMetas} = await getForumMsgMetaData({forumId})
    
    return msgMetas.map(msg => ({
        id: msg.mMsgId,
        title: msg.mMsgName,
        author: msg.mAuthorId,
        date: msg.mPublishTs * 1000
    }))
}