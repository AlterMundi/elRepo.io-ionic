import React, { useState, useEffect, useContext, createContext } from "react";
import api from './api/httpHandler';
import { location } from "./api/types";

interface AppContextInterface {
    account: location,
    loggedIn: boolean
}

const emptyAccount: location = {
  mLocationId: '',
  mLocationName: ''
}

const AuthContext = createContext<AppContextInterface>({
    account: emptyAccount,
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
  const [account, setAccount] = useState(emptyAccount)
  const [loggedIn, setLoggedIn] = useState(false);
  
  const changeAuthState = () => {
    if (api.state.login !== loggedIn) {
        setLoggedIn(api.state.login)
        setAccount(api.state.user)
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
