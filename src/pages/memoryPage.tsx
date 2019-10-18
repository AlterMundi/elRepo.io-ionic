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

import './memoryPage.css';

const MemoryPage: React.FC = () => {
  return (
    <IonPage>  
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonButtons slot={"start"}>
          <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Memory</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding-start ion-padding-end">
      </IonContent>
    </IonPage>
  )
};

export default MemoryPage;
