import React from 'react';
import {
  IonContent, IonPage, IonImg, IonIcon
} from '@ionic/react';

import './homePage.css'
import logo from './logo';
import { search } from 'ionicons/icons';

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonContent class="ion-padding-start ion-padding-end homePage" fullscreen>
        <div className={'search-area'}>
          <IonImg src={logo} className={'homeLogo'} />
          <div className={'search-input search-input--large'} >
            <IonIcon icon={search} className={'search-icon'}/>
            <input type='text' placeholder={'Search content...'}/>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
};

export default HomePage;
