import React from 'react';
import { 
  IonItem, IonIcon, IonButton, IonAlert
} from '@ionic/react';
import { lock } from 'ionicons/icons';
import { Identity } from '../../api/actions/user/manageIdentity';

interface ItemProps {
  id: string
  name: string
  onClick?: (identity:Identity)=>void
}



export const IdentityItem: React.FC<ItemProps> = ({ id, name, onClick=()=>{} }) => {


  return (
    <>
      <IonItem button={name !== 'Public'} onClick={()=>onClick({id, name})}>
        {
          name ==='Public' &&  <IonIcon icon={lock} slot={'end'}/>
        }
        {name}
      </IonItem>
    </>
  );
}