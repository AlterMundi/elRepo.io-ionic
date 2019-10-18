import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { person, share, filing } from 'ionicons/icons';

/* Import pages */
import HomePage from './pages/homePage'
import AccountPage from './pages/accountPage';
import MemoryPage from './pages/memoryPage'
import SharePage from './pages/sharePage'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { ProvideAuth } from './RootContext';

const App: React.FC = () => {
  return (
    <ProvideAuth>
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/home" component={HomePage} exact={true} />
              <Route path="/account" component={AccountPage} exact={true} />
              <Route path="/memory" component={MemoryPage} exact={true} />
              <Route path="/share" component={SharePage} exact={true} />
              <Route exact path="/" render={() => <Redirect to="/home" />} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href="/account">
                <IonIcon icon={person} />
                <IonLabel>Account</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/memory">
                <IonIcon icon={filing} />
                <IonLabel>Memory</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href="/share">
                <IonIcon icon={share} />
                <IonLabel>Share</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    </ProvideAuth>
  );
};


export default App;
