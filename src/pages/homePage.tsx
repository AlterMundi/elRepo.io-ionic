import React from 'react';
import {
  IonContent, IonHeader, IonToolbar, IonIcon, IonSearchbar, IonInput,
} from '@ionic/react';

import './homePage.css'

const HomePage: React.FC = () => {
  return (
    <>  
      <IonContent class="ion-padding-start ion-padding-end" fullscreen color={'primary'}>
        <div className={'search-area'}>
          <div className={'search-input search-input--large'} >
            <input type='text' placeholder={'Search content...'}/>
          </div>
        </div>
      </IonContent>
    </>
  )
};

export default HomePage;
