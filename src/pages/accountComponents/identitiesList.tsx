import React, { useState } from 'react';
import { 
  IonModal,
  IonButton,
  IonIcon,
  IonHeader,
  IonList,
  IonContent,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonToolbar,
  IonAlert
} from '@ionic/react';
import { people, personAdd, returnLeft } from 'ionicons/icons';
import { Identity, loadIdentities, editIdentity, createIdentity } from '../../api/actions/user/manageIdentity';
import { IdentityItem } from './identityItem';
import { alertController } from '@ionic/core';

interface ListProps {
  children?: React.ReactNode,
  show: boolean,
  identities: Identity[],
  close: ()=>void,
  reload: ()=>void
}

export const IdentitiesList: React.FC<ListProps> = ({show, close, identities, reload}) => {
  
  /* TODO: Use IonAlert */
  const edit = async({id, name }:Identity) => {
    if(name === 'Public') return;
    const newName = prompt('Set name', name)
    if (newName) {
      await editIdentity({id, name: newName})
      reload();
    }
  }

  /* TODO: Use IonAlert */
  const add = async() => {
    const name = prompt('Set identity name')
    if (name) {
      await createIdentity(name)
      reload();
    }
  }

  return (
      <IonModal isOpen={show} onDidDismiss={close}>
        <IonHeader>
          <IonToolbar color={"primary"}>
            <IonButtons slot={'start'}>
              <IonButton onClick={close}><IonIcon icon={returnLeft} /></IonButton>
            </IonButtons>
            <IonButtons slot={'end'}>
              <IonButton onClick={add}>Add</IonButton>
            </IonButtons>
            <IonTitle>Identities</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding-start ion-padding-end">
          <IonList>
            {
              identities.map(({name, id}) => (
                <IdentityItem name={name} key={id} id={id} onClick={edit}/>
              ))
            }
          </IonList>
        </IonContent>
      </IonModal>
  );
};

export const IdentitiesListButton: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [alertBox, setAlertBox] = useState<Identity>();
  const [isLoading, setLoading] = useState(false);
  const [identities, setIdentites] = useState<Identity[]>([]);

  const reload = async() => {
    const identitesList = await loadIdentities()
    setIdentites(identitesList)
  }

  const show = async() => {
    setLoading(true)
    await reload();
    setLoading(false)
    setShowModal(true)
  }


  return (
    <>
      <IonButton onClick={show} disabled={isLoading}>
        Manage
        <IonIcon icon={personAdd} slot={'end'}/>
      </IonButton>
      <IdentitiesList reload={reload} show={showModal} close={()=> setShowModal(false)} identities={ identities || [] }/>
    </>
  )
}