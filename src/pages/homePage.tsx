import React from 'react';
import {
  IonContent, IonPage, IonImg
} from '@ionic/react';

import './homePage.css'
import logo from './logo';

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonContent class="ion-padding-start ion-padding-end homePage" fullscreen>
        <div className={'search-area'}>
          <IonImg src={logo} className={'homeLogo'} />
          <div className={'search-input search-input--large'} >
            <input type='text' placeholder={'Search content...'}/>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
};

export default HomePage;
