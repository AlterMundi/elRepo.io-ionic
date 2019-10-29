import React, { useState, useEffect } from 'react';
import { IonList, IonListHeader, IonCardHeader, IonCard, IonTitle, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { listPosts } from '../../api/actions/messages/listForums';


interface ForumListProps {
  name: string,
  id: string
}

interface Post {
    title: string,
    author: string,
    date: number
}

export const ForumList: React.FC<ForumListProps> = ({name, id}) => {
  const [ posts, setPosts ] = useState<Post[]>([])
  
  useEffect(()=>{
    listPosts(id).then((posts:Post[])=> setPosts(posts))
  },[id])

  return (
      <IonList>
          <IonListHeader>{id}</IonListHeader>
          {posts.map(post=>(
              <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>{post.title}</IonCardTitle>
                    <IonCardSubtitle>on {new Date(post.date).toLocaleDateString()}</IonCardSubtitle>
                  </IonCardHeader>
              </IonCard>
          ))}
      </IonList>
  );
};