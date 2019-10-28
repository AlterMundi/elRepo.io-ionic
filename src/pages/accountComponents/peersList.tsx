import React, { useState } from 'react';
import { 
  IonModal,
  IonButton,
  IonIcon,
  IonToolbar,
  IonHeader,
  IonSearchbar,
  IonList,
  IonContent
} from '@ionic/react';
import { people } from 'ionicons/icons';
import { getPeers } from '../../api/actions/peers/getPeers';
import { SearchbarChangeEventDetail } from '@ionic/core';
import { PeerItem } from './peerItem';

interface PeerListProps {
  children?: React.ReactNode,
  show: boolean,
  peers: string[],
  close: ()=>void
}

export const PeerList: React.FC<PeerListProps> = ({show, close, peers}) => {
  const [ word, setWord ] = useState('')
  
  const changeFilter = (e: CustomEvent<SearchbarChangeEventDetail>) => {
    setWord((e.target as HTMLInputElement).value)
  }

  return (
      <IonModal isOpen={show} onDidDismiss={close}>
        <IonHeader>
          <IonToolbar color={'primary'}>  
            <IonSearchbar debounce={200} onIonChange={changeFilter}/>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            {
              peers.map(peer => (
                <PeerItem peerId={peer} key={peer} filterWord={word} show={show}/>
              ))
            }
          </IonList>
        </IonContent>
      </IonModal>
  );
};

export const PeerListButton: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [peers, setPeers] = useState();

  const show = async() => {
    setLoading(true)
    const peerList = await getPeers()
    setLoading(false)
    setPeers(peerList)
    setShowModal(true)
  }

  return (
    <>
      <IonButton onClick={show} disabled={isLoading}>
        Show list
        <IonIcon icon={people} slot={'end'}/>
      </IonButton>
      <PeerList show={showModal} close={()=> setShowModal(false)} peers={ peers || [] }/>
    </>
  )
}