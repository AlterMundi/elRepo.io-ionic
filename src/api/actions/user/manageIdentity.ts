import api from "../../httpHandler"

interface IdentityRs {
    mGroupName: string,
    mGroupId: string
}

export interface Identity {
    id: string,
    name: string
}

export const createIdentity = async(name:string):Promise<string> => {
    if (!name) throw(new Error('name is required'))

    const { createIdentity } = api.endpoints().rsIdentity
    const {id, retval} = await createIdentity({name})
    
    if (!retval) throw(new Error('Create identity fail'))
    
    return id;
}

export const loadIdentities = async() => {
    const { getIdentitiesSummaries } = api.endpoints().rsIdentity

    const { ids }:{ids:Array<IdentityRs>} = await getIdentitiesSummaries()
    
    return ids.map(id => ({ name: id.mGroupName, id: id.mGroupId }))
}

export const deleteIdentity = async(id: string) => {
    if (!id) throw(new Error('Identity id is required'))
    const { deleteIdentity } = api.endpoints().rsIdentity
    const { retval }:{retval:boolean} = await deleteIdentity(id)
    return retval
}

export const editIdentity = async({id, name }: Identity) => {
    //TODO
    return;
}