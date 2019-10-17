import React from 'react';
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
  IonPage
} from '@ionic/react';
import { checkmarkCircleOutline } from 'ionicons/icons';

import './accountPage.css';
import { useAuth } from '../RootContext';
import { loadOrCreateUser } from '../api/actions/user/loadOrCreateAccount';

const AccountPage: React.FC = () => {
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
                {auth.account.split('-')[0]}
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
        </IonList>
      </IonContent>
    </IonPage>
  )
};

export default AccountPage;
