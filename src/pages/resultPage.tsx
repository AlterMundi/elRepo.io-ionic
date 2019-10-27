import React from 'react';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonPage,
  IonImg
} from '@ionic/react';

import img from '../../src/assets/images/no-found.svg'

const ResultPage: React.FC = () => {
  return (
    <IonPage>  
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonButtons slot={"start"}>
          <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Results</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding-start ion-padding-end">
          <IonImg src={img} style={{width:'50%', margin: '40% auto 0 auto'}}/>
      </IonContent>
    </IonPage>
  )
};

export default ResultPage;
