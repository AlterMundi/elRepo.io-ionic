import { apiCall } from './types';

export const endpoints = (apiCall:apiCall) => ({
  jsonApiServer: {
    authorizeToken: (data?: any) => {
      //Input: token
      //Rerval: boolean
      return apiCall({path: '/jsonApiServer/authorizeToken', data });
    },
    decodeToken: (data?: any) => {
      //Input: token
      //Rerval: string
      return apiCall({path: '/jsonApiServer/decodeToken', data });
    },
    encondeToken: (data?: any) => {
      //Input: token
      //Rerval: string
      return apiCall({path: '/jsonApiServer/encondeToken', data });
    },
    getAuthorizedTokens: (data?: any) => {
      //Rerval: [string]
      return apiCall({path: '/jsonApiServer/getAuthorizedTokens', data });
    },
    isAuthTokenValid: (data?: any) => {
      //Input: token
      //Rerval: boolean
      return apiCall({path: '/jsonApiServer/isAuthTokenValid', data });
    },
    requestNewTokenAutorization: (data?: any) => {
      //Input: token
      //Rerval: boolean
      return apiCall({path: '/jsonApiServer/requestNewTokenAutorization', data });
    },
    revokeAuthToken: (data?: any) => {
      //Input: token
      //Rerval: boolean
      return apiCall({path: '/jsonApiServer/revokeAuthToken', data });
    },
    version: (data?: any) => {
      //Output: major (number), minor (number), mini (number), extra (string), human (string)
      //Rerval: void
      return apiCall({path: '/jsonApiServer/version', data });
    },
  },
  rsConfig: {
    getAllBandwidthRates: (data?: any) => {
      //Output: ratemap (Map<RsPeerId,RsConfigDataRates>)
      //Rerval: number
      return apiCall({path: '/rsConfig/getAllBandwidthRates', data });
    },
    getConfigNetStatus: (data?: any) => {
      //Output: status (RsConfigNetStatus)
      //Rerval: number
      return apiCall({path: '/rsConfig/getConfigNetStatus', data });
    },
    GetCurrentDataRates: (data?: any) => {
      //Output: inKb (number), outKb (number)
      //Rerval: number
      return apiCall({path: '/rsConfig/GetCurrentDataRates', data });
    },
    GetMaxDataRates: (data?: any) => {
      //Output: inKb (number), outKb (number)
      //Rerval: number
      return apiCall({path: '/rsConfig/GetMaxDataRates', data });
    },
    getOperatingMode: (data?: any) => {
      //Rerval: number
      return apiCall({path: '/rsConfig/getOperatingMode', data });
    },
    getTotalBandwidthRates: (data?: any) => {
      //Output: rates (RsConfigDataRates)
      //Rerval: number
      return apiCall({path: '/rsConfig/getTotalBandwidthRates', data });
    },
    getTrafficInfo: (data?: any) => {
      //Output: out_lst ([RSTrafficClue]), in_lst ([RSTrafficClue])
      //Rerval: number
      return apiCall({path: '/rsConfig/getTrafficInfo', data });
    },
    SetMaxDataRates: (data?: any) => {
      //Input: downKb , upKb
      //Rerval: number
      return apiCall({path: '/rsConfig/SetMaxDataRates', data });
    },
    setOperatingMode: (data?: any) => {
      //Input: opMode
      //Rerval: boolean
      return apiCall({path: '/rsConfig/setOperatingMode', data });
    },
  },
  rsDisc: {
    getDiscFriends: (data?: any) => {
      //Input: id
      //Output: friends ([RsPeerId])
      //Rerval: boolean
      return apiCall({path: '/rsDisc/getDiscFriends', data });
    },
    getDiscPgpFriends: (data?: any) => {
      //Input: pgpid
      //Output: gpg_friends ([RsPgpId])
      //Rerval: boolean
      return apiCall({path: '/rsDisc/getDiscPgpFriends', data });
    },
    getPeerVersion: (data?: any) => {
      //Input: id
      //Output: versions (string)
      //Rerval: boolean
      return apiCall({path: '/rsDisc/getPeerVersion', data });
    },
    getWaitingDiscCount: (data?: any) => {
      //Output: sendCount (number), recvCount (number)
      //Rerval: boolean
      return apiCall({path: '/rsDisc/getWaitingDiscCount', data });
    },
  },
  rsFiles: {
    addSharedDirectory: (data?: any) => {
      //Input: dir
      //Rerval: boolean
      return apiCall({path: '/rsFiles/addSharedDirectory', data });
    },
    alreadyHaveFile: (data?: any) => {
      //Input: hash
      //Output: info (FileInfo)
      //Rerval: boolean
      return apiCall({path: '/rsFiles/alreadyHaveFile', data });
    },
    banFile: (data?: any) => {
      //Input: realFileHash , filename , fileSize
      //Rerval: number
      return apiCall({path: '/rsFiles/banFile', data });
    },
    defaultChunkStrategy: (data?: any) => {
      //Rerval: FileChunksInfo_ChunkStrategy
      return apiCall({path: '/rsFiles/defaultChunkStrategy', data });
    },
    FileCancel: (data?: any) => {
      //Input: hash
      //Rerval: boolean
      return apiCall({path: '/rsFiles/FileCancel', data });
    },
    FileClearCompleted: (data?: any) => {
      //Rerval: boolean
      return apiCall({path: '/rsFiles/FileClearCompleted', data });
    },
    FileControl: (data?: any) => {
      //Input: hash , flags
      //Rerval: boolean
      return apiCall({path: '/rsFiles/FileControl', data });
    },
    FileDetails: (data?: any) => {
      //Input: hash , hintflags
      //Output: info (FileInfo)
      //Rerval: boolean
      return apiCall({path: '/rsFiles/FileDetails', data });
    },
    FileDownloadChunksDetails: (data?: any) => {
      //Input: hash
      //Output: info (FileChunksInfo)
      //Rerval: boolean
      return apiCall({path: '/rsFiles/FileDownloadChunksDetails', data });
    },
    FileDownloads: (data?: any) => {
      //Output: hashs ([RsFileHash])
      //Rerval: void
      return apiCall({path: '/rsFiles/FileDownloads', data });
    },
    FileRequest: (data?: any) => {
      //Input: fileName , hash , size , destPath , flags , srcIds
      //Rerval: boolean
      return apiCall({path: '/rsFiles/FileRequest', data });
    },
    FileUploadChunksDetails: (data?: any) => {
      //Input: hash , peer_id
      //Output: map (CompressedChunkMap)
      //Rerval: boolean
      return apiCall({path: '/rsFiles/FileUploadChunksDetails', data });
    },
    FileUploads: (data?: any) => {
      //Output: hashs ([RsFileHash])
      //Rerval: boolean
      return apiCall({path: '/rsFiles/FileUploads', data });
    },
    ForceDirectoryCheck: (data?: any) => {
      //Rerval: void
      return apiCall({path: '/rsFiles/ForceDirectoryCheck', data });
    },
    freeDiskSpaceLimit: (data?: any) => {
      //Rerval: number
      return apiCall({path: '/rsFiles/freeDiskSpaceLimit', data });
    },
    getDownloadDirectory: (data?: any) => {
      //Rerval: string
      return apiCall({path: '/rsFiles/getDownloadDirectory', data });
    },
    getPartialsDirectory: (data?: any) => {
      //Rerval: string
      return apiCall({path: '/rsFiles/getPartialsDirectory', data });
    },
    getPrimaryBannedFilesList: (data?: any) => {
      //Output: bannedFiles (Map<RsFileHash,BannedFileEntry>)
      //Rerval: boolean
      return apiCall({path: '/rsFiles/getPrimaryBannedFilesList', data });
    },
    getSharedDirectories: (data?: any) => {
      //Output: dirs ([SharedDirInfo])
      //Rerval: boolean
      return apiCall({path: '/rsFiles/getSharedDirectories', data });
    },
    isHashBanned: (data?: any) => {
      //Input: hash
      //Rerval: boolean
      return apiCall({path: '/rsFiles/isHashBanned', data });
    },
    removeSharedDirectory: (data?: any) => {
      //Input: dir
      //Rerval: boolean
      return apiCall({path: '/rsFiles/removeSharedDirectory', data });
    },
    requestDirDetails: (data?: any) => {
      //Input: handle , flags
      //Output: details (DirDetails)
      //Rerval: boolean
      return apiCall({path: '/rsFiles/requestDirDetails', data });
    },
    setChunkStrategy: (data?: any) => {
      //Input: hash , newStrategy
      //Rerval: boolean
      return apiCall({path: '/rsFiles/setChunkStrategy', data });
    },
    setDefaultChunkStrategy: (data?: any) => {
      //Input: strategy
      //Rerval: void
      return apiCall({path: '/rsFiles/setDefaultChunkStrategy', data });
    },
    setDestinationDirectory: (data?: any) => {
      //Input: hash , newPath
      //Rerval: boolean
      return apiCall({path: '/rsFiles/setDestinationDirectory', data });
    },
    setDestinationName: (data?: any) => {
      //Input: hash , newName
      //Rerval: boolean
      return apiCall({path: '/rsFiles/setDestinationName', data });
    },
    setDownloadDirectory: (data?: any) => {
      //Input: path
      //Rerval: boolean
      return apiCall({path: '/rsFiles/setDownloadDirectory', data });
    },
    setFreeDiskSpaceLimit: (data?: any) => {
      //Input: minimumFreeMB
      //Rerval: void
      return apiCall({path: '/rsFiles/setFreeDiskSpaceLimit', data });
    },
    setPartialsDirectory: (data?: any) => {
      //Input: path
      //Rerval: boolean
      return apiCall({path: '/rsFiles/setPartialsDirectory', data });
    },
    setSharedDirectories: (data?: any) => {
      //Input: dirs
      //Rerval: boolean
      return apiCall({path: '/rsFiles/setSharedDirectories', data });
    },
    turtleSearchRequest: (data?: any) => {
      //Input: matchString , maxWait
      //Rerval: boolean
      return apiCall({path: '/rsFiles/turtleSearchRequest', data });
    },
    unbanFile: (data?: any) => {
      //Input: realFileHash
      //Rerval: number
      return apiCall({path: '/rsFiles/unbanFile', data });
    },
    updateShareFlags: (data?: any) => {
      //Input: dir
      //Rerval: boolean
      return apiCall({path: '/rsFiles/updateShareFlags', data });
    },
  },
  rsGxsChannels: {
    createChannel: (data?: any) => {
      //Input: channel
      //Output: channel (RsGxsChannelGroup)
      //Rerval: boolean
      return apiCall({path: '/rsGxsChannels/createChannel', data });
    },
    createComment: (data?: any) => {
      //Input: comment
      //Output: comment (RsGxsComment)
      //Rerval: boolean
      return apiCall({path: '/rsGxsChannels/createComment', data });
    },
    createPost: (data?: any) => {
      //Input: post
      //Output: post (RsGxsChannelPost)
      //Rerval: boolean
      return apiCall({path: '/rsGxsChannels/createPost', data });
    },
    createVote: (data?: any) => {
      //Input: vote
      //Output: vote (RsGxsVote)
      //Rerval: boolean
      return apiCall({path: '/rsGxsChannels/createVote', data });
    },
    editChannel: (data?: any) => {
      //Input: channel
      //Rerval: boolean
      return apiCall({path: '/rsGxsChannels/editChannel', data });
    },
    ExtraFileHash: (data?: any) => {
      //Input: path
      //Rerval: boolean
      return apiCall({path: '/rsGxsChannels/ExtraFileHash', data });
    },
    ExtraFileRemove: (data?: any) => {
      //Input: hash
      //Rerval: boolean
      return apiCall({path: '/rsGxsChannels/ExtraFileRemove', data });
    },
    getChannelAutoDownload: (data?: any) => {
      //Input: channelId
      //Output: enabled (boolean)
      //Rerval: boolean
      return apiCall({path: '/rsGxsChannels/getChannelAutoDownload', data });
    },
    getChannelContent: (data?: any) => {
      //Input: channelId , contentsIds
      //Output: posts ([RsGxsChannelPost]), comments ([RsGxsComment])
      //Rerval: boolean
      return apiCall({path: '/rsGxsChannels/getChannelContent', data });
    },
    getChannelDownloadDirectory: (data?: any) => {
      //Input: channelId
      //Output: directory (string)
      //Rerval: boolean
      return apiCall({path: '/rsGxsChannels/getChannelDownloadDirectory', data });
    },
    getChannelsInfo: (data?: any) => {
      //Input: chanIds
      //Output: channelsInfo ([RsGxsChannelGroup])
      //Rerval: boolean
      return apiCall({path: '/rsGxsChannels/getChannelsInfo', data });
    },
    getChannelsSummaries: (data?: any) => {
      //Output: channels ([RsGroupMetaData])
      //Rerval: boolean
      return apiCall({path: '/rsGxsChannels/getChannelsSummaries', data });
    },
    getContentSummaries: (data?: any) => {
      //Input: channelId
      //Output: summaries ([RsMsgMetaData])
      //Rerval: boolean
      return apiCall({path: '/rsGxsChannels/getContentSummaries', data });
    },
    localSearchRequest: (data?: any) => {
      //Input: matchString , maxWait
      //Rerval: boolean
      return apiCall({path: '/rsGxsChannels/localSearchRequest', data });
    },
    markRead: (data?: any) => {
      //Input: postId , read
      //Rerval: boolean
      return apiCall({path: '/rsGxsChannels/markRead', data });
    },
    requestStatus: (data?: any) => {
      //Input: token
      //Rerval: RsTokenService_GxsRequestStatus
      return apiCall({path: '/rsGxsChannels/requestStatus', data });
    },
    setChannelAutoDownload: (data?: any) => {
      //Input: channelId , enable
      //Rerval: boolean
      return apiCall({path: '/rsGxsChannels/setChannelAutoDownload', data });
    },
    setChannelDownloadDirectory: (data?: any) => {
      //Input: channelId , directory
      //Rerval: boolean
      return apiCall({path: '/rsGxsChannels/setChannelDownloadDirectory', data });
    },
    shareChannelKeys: (data?: any) => {
      //Input: channelId , peers
      //Rerval: boolean
      return apiCall({path: '/rsGxsChannels/shareChannelKeys', data });
    },
    subscribeToChannel: (data?: any) => {
      //Input: channelId , subscribe
      //Rerval: boolean
      return apiCall({path: '/rsGxsChannels/subscribeToChannel', data });
    },
    turtleChannelRequest: (data?: any) => {
      //Input: channelId , maxWait
      //Rerval: boolean
      return apiCall({path: '/rsGxsChannels/turtleChannelRequest', data });
    },
    turtleSearchRequest: (data?: any) => {
      //Input: matchString , maxWait
      //Rerval: boolean
      return apiCall({path: '/rsGxsChannels/turtleSearchRequest', data });
    },
  },
  rsGxsForums: {
    createForum: (data?: any) => {
      //Input: forum
      //Output: forum (RsGxsForumGroup)
      //Rerval: boolean
      return apiCall({path: '/rsGxsForums/createForum', data });
    },
    createMessage: (data?: any) => {
      //Input: message
      //Output: message (RsGxsForumMsg)
      //Rerval: boolean
      return apiCall({path: '/rsGxsForums/createMessage', data });
    },
    editForum: (data?: any) => {
      //Input: forum
      //Rerval: boolean
      return apiCall({path: '/rsGxsForums/editForum', data });
    },
    getForumContent: (data?: any) => {
      //Input: forumId , msgsIds
      //Output: msgs ([RsGxsForumMsg])
      //Rerval: boolean
      return apiCall({path: '/rsGxsForums/getForumContent', data });
    },
    getForumMsgMetaData: (data?: any) => {
      //Input: forumId
      //Output: msgMetas ([RsMsgMetaData])
      //Rerval: boolean
      return apiCall({path: '/rsGxsForums/getForumMsgMetaData', data });
    },
    getForumsInfo: (data?: any) => {
      //Input: forumIds
      //Output: forumsInfo ([RsGxsForumGroup])
      //Rerval: boolean
      return apiCall({path: '/rsGxsForums/getForumsInfo', data });
    },
    getForumsSummaries: (data?: any) => {
      //Output: forums ([RsGroupMetaData])
      //Rerval: boolean
      return apiCall({path: '/rsGxsForums/getForumsSummaries', data });
    },
    markRead: (data?: any) => {
      //Input: messageId , read
      //Rerval: boolean
      return apiCall({path: '/rsGxsForums/markRead', data });
    },
    requestStatus: (data?: any) => {
      //Input: token
      //Rerval: RsTokenService_GxsRequestStatus
      return apiCall({path: '/rsGxsForums/requestStatus', data });
    },
    subscribeToForum: (data?: any) => {
      //Input: forumId , subscribe
      //Rerval: boolean
      return apiCall({path: '/rsGxsForums/subscribeToForum', data });
    },
  },
  rsControl: {
    isReady: (data?: any) => {
      //Rerval: boolean
      return apiCall({path: '/rsControl/isReady', data });
    },
  },
  rsLoginHelper: {
    collectEntropy: (data?: any) => {
      //Input: bytes
      //Rerval: boolean
      return apiCall({path: '/rsLoginHelper/collectEntropy', data });
    },
    getLocations: (data?: any) => {
      //Output: locations ([RsLoginHelper_Location])
      //Rerval: void
      return apiCall({path: '/rsLoginHelper/getLocations', data });
    },
    isLoggedIn: (data?: any) => {
      //Rerval: boolean
      return apiCall({path: '/rsLoginHelper/isLoggedIn', data });
    },
    attemptLogin: (data?: any) => {
      return apiCall({path: '/rsLoginHelper/attemptLogin', data });
    },
  },
  rsAccounts: {
    ExportIdentity: (data?: any) => {
      //Input: filePath , pgpId
      //Rerval: boolean
      return apiCall({path: '/rsAccounts/ExportIdentity', data });
    },
    exportIdentityToString: (data?: any) => {
      //Input: pgpId , includeSignatures
      //Output: data (string), errorMsg (string)
      //Rerval: boolean
      return apiCall({path: '/rsAccounts/exportIdentityToString', data });
    },
    getCurrentAccountId: (data?: any) => {
      //Output: id (RsPeerId)
      //Rerval: boolean
      return apiCall({path: '/rsAccounts/getCurrentAccountId', data });
    },
    GetPGPLogins: (data?: any) => {
      //Output: pgpIds ([RsPgpId])
      //Rerval: number
      return apiCall({path: '/rsAccounts/GetPGPLogins', data });
    },
    ImportIdentity: (data?: any) => {
      //Input: filePath
      //Output: pgpId (RsPgpId), errorMsg (string)
      //Rerval: boolean
      return apiCall({path: '/rsAccounts/ImportIdentity', data });
    },
    importIdentityFromString: (data?: any) => {
      //Input: data
      //Output: pgpId (RsPgpId), errorMsg (string)
      //Rerval: boolean
      return apiCall({path: '/rsAccounts/importIdentityFromString', data });
    },
  },
  rsMsgs: {
    acceptLobbyInvite: (data?: any) => {
      //Input: id , identity
      //Rerval: boolean
      return apiCall({path: '/rsMsgs/acceptLobbyInvite', data });
    },
    clearChatLobby: (data?: any) => {
      //Input: id
      //Rerval: void
      return apiCall({path: '/rsMsgs/clearChatLobby', data });
    },
    createChatLobby: (data?: any) => {
      //Input: lobby_name , lobby_identity , lobby_topic , invited_friends , lobby_privacy_type
      //Rerval: ChatLobbyId
      return apiCall({path: '/rsMsgs/createChatLobby', data });
    },
    denyLobbyInvite: (data?: any) => {
      //Input: id
      //Rerval: void
      return apiCall({path: '/rsMsgs/denyLobbyInvite', data });
    },
    getChatLobbyInfo: (data?: any) => {
      //Input: id
      //Output: info (ChatLobbyInfo)
      //Rerval: boolean
      return apiCall({path: '/rsMsgs/getChatLobbyInfo', data });
    },
    getChatLobbyList: (data?: any) => {
      //Output: cl_list ([ChatLobbyId])
      //Rerval: void
      return apiCall({path: '/rsMsgs/getChatLobbyList', data });
    },
    getCustomStateString: (data?: any) => {
      //Input: peer_id
      //Rerval: string
      return apiCall({path: '/rsMsgs/getCustomStateString', data });
    },
    getDefaultIdentityForChatLobby: (data?: any) => {
      //Output: id (RsGxsId)
      //Rerval: void
      return apiCall({path: '/rsMsgs/getDefaultIdentityForChatLobby', data });
    },
    getIdentityForChatLobby: (data?: any) => {
      //Input: lobby_id
      //Output: nick (RsGxsId)
      //Rerval: boolean
      return apiCall({path: '/rsMsgs/getIdentityForChatLobby', data });
    },
    getListOfNearbyChatLobbies: (data?: any) => {
      //Output: public_lobbies ([VisibleChatLobbyRecord])
      //Rerval: void
      return apiCall({path: '/rsMsgs/getListOfNearbyChatLobbies', data });
    },
    getLobbyAutoSubscribe: (data?: any) => {
      //Input: lobby_id
      //Rerval: boolean
      return apiCall({path: '/rsMsgs/getLobbyAutoSubscribe', data });
    },
    getMaxMessageSecuritySize: (data?: any) => {
      //Input: type
      //Rerval: number
      return apiCall({path: '/rsMsgs/getMaxMessageSecuritySize', data });
    },
    getMessage: (data?: any) => {
      //Input: msgId
      //Output: msg (Rs_Msgs_MessageInfo)
      //Rerval: boolean
      return apiCall({path: '/rsMsgs/getMessage', data });
    },
    getMessageCount: (data?: any) => {
      //Output: nInbox (number), nInboxNew (number), nOutbox (number), nDraftbox (number), nSentbox (number), nTrashbox (number)
      //Rerval: void
      return apiCall({path: '/rsMsgs/getMessageCount', data });
    },
    getMessageSummaries: (data?: any) => {
      //Output: msgList ([Rs_Msgs_MsgInfoSummary])
      //Rerval: boolean
      return apiCall({path: '/rsMsgs/getMessageSummaries', data });
    },
    getMessageTag: (data?: any) => {
      //Input: msgId
      //Output: info (Rs_Msgs_MsgTagInfo)
      //Rerval: boolean
      return apiCall({path: '/rsMsgs/getMessageTag', data });
    },
    getMessageTagTypes: (data?: any) => {
      //Output: tags (Rs_Msgs_MsgTagType)
      //Rerval: boolean
      return apiCall({path: '/rsMsgs/getMessageTagTypes', data });
    },
    getMsgParentId: (data?: any) => {
      //Input: msgId
      //Output: msgParentId (string)
      //Rerval: boolean
      return apiCall({path: '/rsMsgs/getMsgParentId', data });
    },
    getPendingChatLobbyInvites: (data?: any) => {
      //Output: invites ([ChatLobbyInvite])
      //Rerval: void
      return apiCall({path: '/rsMsgs/getPendingChatLobbyInvites', data });
    },
    invitePeerToLobby: (data?: any) => {
      //Input: lobby_id , peer_id
      //Rerval: void
      return apiCall({path: '/rsMsgs/invitePeerToLobby', data });
    },
    joinVisibleChatLobby: (data?: any) => {
      //Input: lobby_id , own_id
      //Rerval: boolean
      return apiCall({path: '/rsMsgs/joinVisibleChatLobby', data });
    },
    MessageDelete: (data?: any) => {
      //Input: msgId
      //Rerval: boolean
      return apiCall({path: '/rsMsgs/MessageDelete', data });
    },
    MessageForwarded: (data?: any) => {
      //Input: msgId , forwarded
      //Rerval: boolean
      return apiCall({path: '/rsMsgs/MessageForwarded', data });
    },
    MessageLoadEmbeddedImages: (data?: any) => {
      //Input: msgId , load
      //Rerval: boolean
      return apiCall({path: '/rsMsgs/MessageLoadEmbeddedImages', data });
    },
    MessageRead: (data?: any) => {
      //Input: msgId , unreadByUser
      //Rerval: boolean
      return apiCall({path: '/rsMsgs/MessageRead', data });
    },
    MessageReplied: (data?: any) => {
      //Input: msgId , replied
      //Rerval: boolean
      return apiCall({path: '/rsMsgs/MessageReplied', data });
    },
    MessageSend: (data?: any) => {
      //Input: info
      //Rerval: boolean
      return apiCall({path: '/rsMsgs/MessageSend', data });
    },
    MessageStar: (data?: any) => {
      //Input: msgId , mark
      //Rerval: boolean
      return apiCall({path: '/rsMsgs/MessageStar', data });
    },
    MessageToDraft: (data?: any) => {
      //Input: info , msgParentId
      //Rerval: boolean
      return apiCall({path: '/rsMsgs/MessageToDraft', data });
    },
    MessageToTrash: (data?: any) => {
      //Input: msgId , bTrash
      //Rerval: boolean
      return apiCall({path: '/rsMsgs/MessageToTrash', data });
    },
    removeMessageTagType: (data?: any) => {
      //Input: tagId
      //Rerval: boolean
      return apiCall({path: '/rsMsgs/removeMessageTagType', data });
    },
    resetMessageStandardTagTypes: (data?: any) => {
      //Output: tags (Rs_Msgs_MsgTagType)
      //Rerval: boolean
      return apiCall({path: '/rsMsgs/resetMessageStandardTagTypes', data });
    },
    sendChat: (data?: any) => {
      //Input: id , msg
      //Rerval: boolean
      return apiCall({path: '/rsMsgs/sendChat', data });
    },
    sendStatusString: (data?: any) => {
      //Input: id , status_string
      //Rerval: void
      return apiCall({path: '/rsMsgs/sendStatusString', data });
    },
    setCustomStateString: (data?: any) => {
      //Input: status_string
      //Rerval: void
      return apiCall({path: '/rsMsgs/setCustomStateString', data });
    },
    setDefaultIdentityForChatLobby: (data?: any) => {
      //Input: nick
      //Rerval: boolean
      return apiCall({path: '/rsMsgs/setDefaultIdentityForChatLobby', data });
    },
    setIdentityForChatLobby: (data?: any) => {
      //Input: lobby_id , nick
      //Rerval: boolean
      return apiCall({path: '/rsMsgs/setIdentityForChatLobby', data });
    },
    setLobbyAutoSubscribe: (data?: any) => {
      //Input: lobby_id , autoSubscribe
      //Rerval: void
      return apiCall({path: '/rsMsgs/setLobbyAutoSubscribe', data });
    },
    setMessageTag: (data?: any) => {
      //Input: msgId , tagId , set
      //Rerval: boolean
      return apiCall({path: '/rsMsgs/setMessageTag', data });
    },
    setMessageTagType: (data?: any) => {
      //Input: tagId , text , rgb_color
      //Rerval: boolean
      return apiCall({path: '/rsMsgs/setMessageTagType', data });
    },
    SystemMessage: (data?: any) => {
      //Input: title , message , systemFlag
      //Rerval: boolean
      return apiCall({path: '/rsMsgs/SystemMessage', data });
    },
    unsubscribeChatLobby: (data?: any) => {
      //Input: lobby_id
      //Rerval: void
      return apiCall({path: '/rsMsgs/unsubscribeChatLobby', data });
    },
  },
  rsPeers: {
    acceptInvite: (data?: any) => {
      //Input: invite , flags
      //Rerval: boolean
      return apiCall({path: '/rsPeers/acceptInvite', data });
    },
    addFriend: (data?: any) => {
      //Input: sslId , gpgId , flags
      //Rerval: boolean
      return apiCall({path: '/rsPeers/addFriend', data });
    },
    addGroup: (data?: any) => {
      //Input: groupInfo
      //Rerval: boolean
      return apiCall({path: '/rsPeers/addGroup', data });
    },
    addPeerLocator: (data?: any) => {
      //Input: sslId , locator
      //Rerval: boolean
      return apiCall({path: '/rsPeers/addPeerLocator', data });
    },
    assignPeersToGroup: (data?: any) => {
      //Input: groupId , peerIds , assign
      //Rerval: boolean
      return apiCall({path: '/rsPeers/assignPeersToGroup', data });
    },
    assignPeerToGroup: (data?: any) => {
      //Input: groupId , peerId , assign
      //Rerval: boolean
      return apiCall({path: '/rsPeers/assignPeerToGroup', data });
    },
    connectAttempt: (data?: any) => {
      //Input: sslId
      //Rerval: boolean
      return apiCall({path: '/rsPeers/connectAttempt', data });
    },
    editGroup: (data?: any) => {
      //Input: groupId , groupInfo
      //Rerval: boolean
      return apiCall({path: '/rsPeers/editGroup', data });
    },
    getFriendList: (data?: any) => {
      //Output: sslIds ([RsPeerId])
      //Rerval: boolean
      return apiCall({path: '/rsPeers/getFriendList', data });
    },
    getGPGId: (data?: any) => {
      //Input: sslId
      //Rerval: RsPgpId
      return apiCall({path: '/rsPeers/getGPGId', data });
    },
    getGroupInfo: (data?: any) => {
      //Input: groupId
      //Output: groupInfo (RsGroupInfo)
      //Rerval: boolean
      return apiCall({path: '/rsPeers/getGroupInfo', data });
    },
    getGroupInfoByName: (data?: any) => {
      //Input: groupName
      //Output: groupInfo (RsGroupInfo)
      //Rerval: boolean
      return apiCall({path: '/rsPeers/getGroupInfoByName', data });
    },
    getGroupInfoList: (data?: any) => {
      //Output: groupInfoList ([RsGroupInfo])
      //Rerval: boolean
      return apiCall({path: '/rsPeers/getGroupInfoList', data });
    },
    getOnlineList: (data?: any) => {
      //Output: sslIds ([RsPeerId])
      //Rerval: boolean
      return apiCall({path: '/rsPeers/getOnlineList', data });
    },
    getPeerDetails: (data?: any) => {
      //Input: sslId
      //Output: det (RsPeerDetails)
      //Rerval: boolean
      return apiCall({path: '/rsPeers/getPeerDetails', data });
    },
    getPeersCount: (data?: any) => {
      //Input: countLocations
      //Output: peersCount (number), onlinePeersCount (number)
      //Rerval: boolean
      return apiCall({path: '/rsPeers/getPeersCount', data });
    },
    GetRetroshareInvite: (data?: any) => {
      //Input: sslId , includeSignatures , includeExtraLocators
      //Rerval: string
      return apiCall({path: '/rsPeers/GetRetroshareInvite', data });
    },
    isFriend: (data?: any) => {
      //Input: sslId
      //Rerval: boolean
      return apiCall({path: '/rsPeers/isFriend', data });
    },
    isOnline: (data?: any) => {
      //Input: sslId
      //Rerval: boolean
      return apiCall({path: '/rsPeers/isOnline', data });
    },
    isPgpFriend: (data?: any) => {
      //Input: pgpId
      //Rerval: boolean
      return apiCall({path: '/rsPeers/isPgpFriend', data });
    },
    loadCertificateFromString: (data?: any) => {
      //Input: cert
      //Output: sslId (RsPeerId), pgpId (RsPgpId), errorString (string)
      //Rerval: boolean
      return apiCall({path: '/rsPeers/loadCertificateFromString', data });
    },
    loadDetailsFromStringCert: (data?: any) => {
      //Input: cert
      //Output: certDetails (RsPeerDetails), errorCode (number)
      //Rerval: boolean
      return apiCall({path: '/rsPeers/loadDetailsFromStringCert', data });
    },
    removeFriend: (data?: any) => {
      //Input: pgpId
      //Rerval: boolean
      return apiCall({path: '/rsPeers/removeFriend', data });
    },
    removeFriendLocation: (data?: any) => {
      //Input: sslId
      //Rerval: boolean
      return apiCall({path: '/rsPeers/removeFriendLocation', data });
    },
    removeGroup: (data?: any) => {
      //Input: groupId
      //Rerval: boolean
      return apiCall({path: '/rsPeers/removeGroup', data });
    },
    setDynDNS: (data?: any) => {
      //Input: sslId , addr
      //Rerval: boolean
      return apiCall({path: '/rsPeers/setDynDNS', data });
    },
    setExtAddress: (data?: any) => {
      //Input: sslId , addr , port
      //Rerval: boolean
      return apiCall({path: '/rsPeers/setExtAddress', data });
    },
    setLocalAddress: (data?: any) => {
      //Input: sslId , addr , port
      //Rerval: boolean
      return apiCall({path: '/rsPeers/setLocalAddress', data });
    },
    setNetworkMode: (data?: any) => {
      //Input: sslId , netMode
      //Rerval: boolean
      return apiCall({path: '/rsPeers/setNetworkMode', data });
    },
    setVisState: (data?: any) => {
      //Input: sslId , vsDisc , vsDht
      //Rerval: boolean
      return apiCall({path: '/rsPeers/setVisState', data });
    },
  },
  rsServiceControl: {
    getOwnServices: (data?: any) => {
      //Output: info (RsPeerServiceInfo)
      //Rerval: boolean
      return apiCall({path: '/rsServiceControl/getOwnServices', data });
    },
    getPeersConnected: (data?: any) => {
      //Input: serviceId
      //Output: peerSet ([RsPeerId])
      //Rerval: void
      return apiCall({path: '/rsServiceControl/getPeersConnected', data });
    },
    getServiceItemNames: (data?: any) => {
      //Input: serviceId
      //Output: names (Map<number,string>)
      //Rerval: boolean
      return apiCall({path: '/rsServiceControl/getServiceItemNames', data });
    },
    getServiceName: (data?: any) => {
      //Input: serviceId
      //Rerval: string
      return apiCall({path: '/rsServiceControl/getServiceName', data });
    },
    getServicePermissions: (data?: any) => {
      //Input: serviceId
      //Output: permissions (RsServicePermissions)
      //Rerval: boolean
      return apiCall({path: '/rsServiceControl/getServicePermissions', data });
    },
    getServicesAllowed: (data?: any) => {
      //Input: peerId
      //Output: info (RsPeerServiceInfo)
      //Rerval: boolean
      return apiCall({path: '/rsServiceControl/getServicesAllowed', data });
    },
    getServicesProvided: (data?: any) => {
      //Input: peerId
      //Output: info (RsPeerServiceInfo)
      //Rerval: boolean
      return apiCall({path: '/rsServiceControl/getServicesProvided', data });
    },
    updateServicePermissions: (data?: any) => {
      //Input: serviceId , permissions
      //Rerval: boolean
      return apiCall({path: '/rsServiceControl/updateServicePermissions', data });
    },
  },
});
