import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonPage,
  IonInput,
  IonList,
  IonLabel,
  IonItem,
  IonTextarea,
  IonButton,
  IonIcon,
  IonToast,
  IonSelect,
  IonSelectOption,
} from '@ionic/react';

import { cloudUpload } from 'ionicons/icons'
import { createMessage, forumInput } from '../api/actions/messages/createMessage';
import './sharePage.css';
import { Identity, loadIdentities } from '../api/actions/user/manageIdentity';
import { SelectChangeEventDetail } from '@ionic/core';


const SharePage: React.FC = () => {

  const [form, setForm] = useState<forumInput>({
    title: '',
    categories: [],
    description: '',
    files: [],
    image: '',
    identityId: ''
  })

  const [identities, setIdentities] = useState<Identity[] | null>(null);
  const [ toast, setToast ] = useState(false)

  const reloadIdentities = async() => {
    loadIdentities().then(setIdentities)
  }

  useEffect(()=>{
    if(!identities) {
      setIdentities([])
      reloadIdentities()
    }
  })
  
  const publish = () => {
    const {title, description } = form;
    if(title === '' && description === '') {
      //'invalid title or description'
      setToast(true);
      setTimeout(()=>setToast(false), 4000)
      return;
    }
    createMessage(form)
  }

  const inputChange = (field:string) => {
    return (e:CustomEvent<KeyboardEvent>) => {
      setForm({
        ...form,
        [field]: field !=='categories'
          ? (e.target as HTMLInputElement).value
          : (e.target as HTMLInputElement).value.split(',').filter(p => p!=='')
      })
      return e
    }
  }

  const selectChange = (e: CustomEvent<SelectChangeEventDetail>) => {
    console.log(form)
    setForm({
      ...form,
      identityId: (e.target as HTMLSelectElement).value
    })
  }
  
  return (
    <IonPage>  
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonButtons slot={"start"}>
          <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Share content</IonTitle>
          <IonButtons slot={"end"}>
          <IonButton fill={'outline'} onClick={publish}>
            <IonIcon icon={cloudUpload} style={{marginRight: '10px'}}/>
            Publish
          </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding-start ion-padding-end">
        <IonList>

          <IonItem>
            <IonLabel position={'floating'}>Title</IonLabel>
            <IonInput onIonInput={inputChange('title')} value={form.title} />
          </IonItem>

          <IonItem>
          <IonLabel position={'floating'}>Identity</IonLabel>
            <IonSelect placeholder={'Select Identity'} onIonChange={selectChange} onClick={reloadIdentities}>
              {identities && identities.map(identity => (
                <IonSelectOption key={identity.id} value={identity.id}>{identity.name}</IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel position={'floating'}>Categories</IonLabel>
            <IonInput disabled onIonInput={inputChange('categories')} value={form.categories.reduce((p,a)=> p===''? a : p+','+a,'')} />
          </IonItem>

          <IonItem>
            <IonLabel position={'floating'}>Description</IonLabel>
            <IonTextarea onIonInput={inputChange('description')} value={form.description} />
          </IonItem>


          <IonButton disabled fill={'outline'} expand={'block'}  style={{marginTop: '20px'}}>
            Select image to show
          </IonButton>
          
          <IonButton disabled fill={'outline'} expand={'block'}  style={{marginTop: '20px'}}>
            Select files
          </IonButton>
        </IonList>
        <IonToast message={'Please enter a valid title and description'} isOpen={toast} />
      </IonContent>
    </IonPage>
  )
};

export default SharePage;
