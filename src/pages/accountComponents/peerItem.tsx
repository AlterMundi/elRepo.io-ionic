import React, { useState, useEffect } from 'react';
import { 
  IonItem, IonIcon
} from '@ionic/react';
import { getPeerInfo, getPeerStatus } from '../../api/actions/peers/getPeerInfo';
import { checkmarkCircle, radioButtonOff } from 'ionicons/icons';

interface PeerItemProps {
  peerId: string
  filterWord: string,
  show: boolean
}

interface Peer {
    det: {
        name: string
    }
}

export const PeerItem: React.FC<PeerItemProps> = ({ peerId, filterWord, show }) => {
  const [ data, setData ] = useState<Peer>()
  const [ online, setOnline ] = useState<Boolean>()

  useEffect(()=>{
    if (show === true){
      getPeerInfo(peerId).then(peerData => setData(peerData))
      getPeerStatus(peerId).then(peerStatus => setOnline(peerStatus.retval))
    }
  }, [show, peerId])

  return data && data.det.name.indexOf(filterWord) !== -1 ?
    (<IonItem>
      <IonIcon icon={online? checkmarkCircle: radioButtonOff} color={online? 'success': ''} slot={'end'}/>
      {data? data.det.name: peerId}
    </IonItem>
    ): <></>
}