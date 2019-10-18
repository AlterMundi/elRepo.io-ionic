import React from 'react';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonPage
} from '@ionic/react';

import './sharePage.css';

const SharePage: React.FC = () => {
  return (
    <IonPage>  
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonButtons slot={"start"}>
          <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Share</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding-start ion-padding-end">
      </IonContent>
    </IonPage>
  )
};

export default SharePage;
