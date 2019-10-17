export interface Credentials {
    account: string,
    password: string
}

export const saveCredentials = ({ account, password }:Credentials) => {
    window.localStorage.setItem('rsCredentials', JSON.stringify({account, password}))
}

export const getCredentials = ():undefined | Credentials => {
    try {
        let rawCredentials = window.localStorage.getItem('rsCredentials')
        if(rawCredentials) {
            return JSON.parse(rawCredentials)
        }
    } catch (e) {
        return undefined;
    }
}
