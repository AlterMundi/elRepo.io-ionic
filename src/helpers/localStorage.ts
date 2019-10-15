export interface credentials {
    account: string,
    password: string
}

export const saveCredentials = ({ account, password }:credentials) => {
    window.localStorage.setItem('rsCredentials', JSON.stringify({account, password}))
}

export const getCredentials = ():undefined|credentials => {
    try {
        let rawCredentials = window.localStorage.getItem('rsCredentials')
        if(rawCredentials) {
            return JSON.parse(rawCredentials)
        }
    } catch (e) {
        return undefined;
    }
}
