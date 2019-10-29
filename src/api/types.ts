import { string } from "prop-types";

export interface apiState {
    url?: string,
    port?: string,
    login?: boolean,
    user?: location,
    password?: string
}

export interface apiRequest {
    path: string,
    data: any,
    method?: string
}

export interface apiBasicResponse {
    retval: boolean,
    errorMessage?: string,
}

export interface apiCall<T> {
    (callOptions:apiRequest): Promise<T>
}

export interface location {
    mLocationId: string,
    mLocationName: string,
    mPgpName?: string,
    mPgpId?: string,
}

type gsxMeta = {
    mCircleId: string,
    mCircleType: number,
    mAuthorId: string,
    mGroupId: string,
    mGroupName: string,
    mPublishTs: number,
    mPublishTs_sixtyfour_str: string,
    mAuthenFlags: number,
    mGroupFlags: number,
    ​​​mGroupStatus: number
    mInternalCircle: string,
    mLastPost: number,
    mLastPost_sixtyfour_str: string,
    mOriginator: string,
    mParentGrpId: string,
    mPop: number,
    mServiceString: string,
    mSignFlags: number,
    mSubscribeFlags: number,
    mVisibleMsgCount: number
}

export interface channel {
    mAutoDownload?: boolean,
    mDescription?: string,
    mImage: {
        mData: string
    },
    mMeta: gsxMeta
}

export interface forum {
    mAdminList: Array<string>,
    ​​mDescription: string
​    mMeta: gsxMeta,​​​
    mPinnedPosts: Array<string>
}

export interface createLocationResponse extends apiBasicResponse {
    location: location
}

export interface createChannelResponse extends apiBasicResponse {
    channel: channel
}

export interface createForumResponse extends apiBasicResponse {
    forumId: string
}

export interface MsgMetas {
        mAuthorId: string,
        mChildTs: number,
        mChildTs_sixtyfour_str: string,
        mGroupId: string,
        mMsgFlags: number,
        mMsgId: string,
        mMsgName: string,
        mMsgStatus: number,
        mOrigMsgId: string,
        mParentId: string,
        mPublishTs: number,
        mPublishTs_sixtyfour_str: string,
        mServiceString: string,
        mThreadId: string
    }

export interface listForumMessagesResponse extends apiBasicResponse {
    msgMetas: MsgMetas[]
}

export interface ForumRS {
    mAuthenFlags: number
    mAuthorId: string,
    mCircleId: string,
    mCircleType: number
    mGroupFlags: number,
    mGroupId: string
    mGroupName: string,
    mGroupStatus: number,
    mInternalCircle: string,
    mLastPost: number,
    mLastPost_sixtyfour_str: string,
    mOriginator: string,
    mParentGrpId: string,
    mPop: number,
    mPublishTs: number,
    mPublishTs_sixtyfour_str: string,
    mServiceString: string,
    mSignFlags: number,
    mSubscribeFlags: number,
    mVisibleMsgCount: number
}

export interface GetForumsInfoResponse extends apiBasicResponse {
    forums: ForumRS[]
}

export type basicResponse = createLocationResponse
    | createChannelResponse
    | createForumResponse
    | GetForumsInfoResponse
    | listForumMessagesResponse
