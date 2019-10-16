import React, { useState, useEffect, useContext, createContext } from "react";
import api from './api/httpHandler';

interface AppContextInterface {
    account: string,
    loggedIn: boolean
}

const AuthContext = createContext<AppContextInterface>({
    account: '',
    loggedIn: false
});


export function ProvideAuth({ children }: { children: any}) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};


function useProvideAuth() {
  const [account, setAccount] = useState('')
  const [loggedIn, setLoggedIn] = useState(false);
  
  const changeAuthState = () => {
    if (api.state.login !== loggedIn) {
        setLoggedIn(api.state.login)
    }
    if (api.state.user.mLocationId !== account) {
        setAccount(api.state.user.mLocationId)
    }
  }

  useEffect(() => {
    window.addEventListener('apiChange', changeAuthState)
    return () => {
        window.removeEventListener('apiChange', changeAuthState)
    };
  });

  return {
    account,
    loggedIn
  };

}
