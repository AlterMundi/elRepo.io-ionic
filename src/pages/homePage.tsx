import React from 'react';
import {
  IonContent, IonPage
} from '@ionic/react';

import './homePage.css'

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonContent class="ion-padding-start ion-padding-end" fullscreen color={'primary'}>
        <div className={'search-area'}>
          <div className={'search-input search-input--large'} >
            <input type='text' placeholder={'Search content...'}/>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
};

export default HomePage;
