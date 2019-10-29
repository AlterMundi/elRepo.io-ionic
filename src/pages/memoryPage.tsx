import React, { useEffect, useState } from 'react';
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

import { listForums, Forum } from '../api/actions/messages/listForums';
import { ForumList } from './memoryComponents/memoryForum';

const MemoryPage: React.FC = () => {
  const [forums, setForums] = useState<Forum[]|null>(null)
  useEffect(() => {
    if(!forums || forums.length === 0) {
      listForums().then(setForums)
    }
  })
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
        {forums && forums.map(forum => (
          <ForumList {...forum} key={forum.id} />
        ))}
      </IonContent>
    </IonPage>
  )
};

export default MemoryPage;
