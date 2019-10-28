import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonIcon,
  IonText,
  IonList,
  IonListHeader,
  IonButton,
  IonButtons,
  IonBackButton,
  IonPage,
  IonAlert,
  IonToggle
} from '@ionic/react';
import { checkmarkCircleOutline, search } from 'ionicons/icons';

import './accountPage.css';
import { useAuth } from '../RootContext';
import { loadOrCreateUser } from '../api/actions/user/loadOrCreateAccount';
import { handleDiscovery } from '../api/actions/discovery/handleDiscovery';
import { setDiscoveryMode } from '../api/actions/discovery/setDiscoveryMode';
import { loadDiscoveryMode } from '../api/actions/discovery/loadDiscoveryMode';
import { PeerListButton } from './accountComponents/peersList';
import { joinTiers } from '../api/actions/tier1/joinTier';
import { IdentitiesListButton } from './accountComponents/identitiesList';

const AccountPage: React.FC = () => {
  const [ discoverySettings, setDiscoverySettings ] = useState({ autoPeering: true })
  const [ peersFounded, setPeersFounded ] = useState()
  const [ showAlert, setAlert ] = useState({show:false, loading: false})

  const loadPeers = async() => {
    const { error, peers=[] } = await handleDiscovery()
    if (error) { return }
    if (peers.length === 0) { 
      setAlert({show: true, loading: false})
      return
    }
    setPeersFounded(peers)
  }

  const changeDiscovery = () => { 
    const newConfig = { autoPeering: !discoverySettings.autoPeering };
    setDiscoveryMode(newConfig);
    setDiscoverySettings(newConfig)
  }

  useEffect(()=> {
    const config = loadDiscoveryMode()
    setDiscoverySettings(config)
  },[])

  const auth = useAuth();
  return (
    <IonPage>  
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonButtons slot={"start"}>
          <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding-start ion-padding-end">
        <IonList>
          <IonListHeader>
            RetroShare service
          </IonListHeader>
          <IonItem>
              <IonLabel>
                User
              </IonLabel>
              <IonText slot={'end'}>
                {auth.account.mLocationName.split('-')[0]}
              </IonText>
          </IonItem>
          <IonItem>
              <IonLabel>
                Status
              </IonLabel>
              { auth.loggedIn
                 ? <IonIcon  icon={checkmarkCircleOutline} slot="end" color={'success'} />
                 : <IonButton onClick={()=>loadOrCreateUser()}>Login</IonButton>
              }
          </IonItem>
          <IonItem>
            <IonLabel>
              Auto peering
            </IonLabel>
            <IonToggle slot={'end'} checked={discoverySettings.autoPeering} onClick={()=>changeDiscovery()}/>
          </IonItem>
          <IonItem disabled={!auth.loggedIn}>
            <IonLabel>
              Tier1 stauts
            </IonLabel>
            <IonButton slot={'end'} onClick={joinTiers}>
              <IonIcon  icon={search} slot="end"/>
              Join
            </IonButton>
          </IonItem>
          <IonItem disabled={!auth.loggedIn}>
            <IonLabel>
              Local network
            </IonLabel>
            <IonButton slot={'end'} onClick={loadPeers}>
              <IonIcon  icon={search} slot="end"/>
              Find peers
            </IonButton>
          </IonItem>
          <IonItem disabled={!auth.loggedIn}>
            <IonLabel>
              Actual peers
            </IonLabel>
            <PeerListButton />
          </IonItem>
          <IonItem disabled={!auth.loggedIn}>
            <IonLabel>
              Identities
            </IonLabel>
            <IdentitiesListButton />
          </IonItem>
        </IonList>
        <IonAlert
          isOpen={showAlert.show}
          onDidDismiss={() => setAlert({show: false, loading: false})}
          header={'Peers not found'}
          message={'No other user was found on your local network. Check your connection to the network and try again.'}
          buttons={['Close']}
        />
      </IonContent>
    </IonPage>
  )
};

export default AccountPage;
