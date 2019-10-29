import React, { useState, useEffect } from 'react';
import { 
  IonModal,
  IonToolbar,
  IonHeader,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon
} from '@ionic/react';
import { shuffle, open, arrowBack } from 'ionicons/icons'

import { getMessage, MessageDescription } from '../../api/actions/messages/getMessage';

interface MessagePageProps {
  children?: React.ReactNode,
  show: boolean,
  postId: string,
  forumId: string,
  title: string
  close: ()=>void
}

export const MemoryMessage: React.FC<MessagePageProps> = ({show, close, forumId, postId, title}) => {
    
    const [ post, setPost ] = useState<MessageDescription | null>(null)

    useEffect(()=>{
      getMessage(forumId, postId).then(setPost)
    },[postId])

    return (
      <IonModal isOpen={show} onDidDismiss={close}>
        <IonHeader>
          <IonToolbar color={'primary'}>  
            <IonButtons slot={'start'}>
              <IonButton onClick={close}><IonIcon icon={arrowBack} /></IonButton>
            </IonButtons>
            <IonButtons slot={'end'}>
              {post && post.owner
                ? <IonButton slot={'end'}><IonIcon icon={open}/> Edit</IonButton>
                : <IonButton slot={'end'}><IonIcon icon={shuffle}/> Republish</IonButton>
              }
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding-start ion-padding-end">
          {post && 
            <>
              <h2>{title}</h2>
              <sub>{new Date(post.publish).toLocaleString()} - By {post.author} {post.owner? '(you)': false}</sub>
              <p>
                {post.description}
              </p>
            </>
          }
        </IonContent>
      </IonModal>
  );
};