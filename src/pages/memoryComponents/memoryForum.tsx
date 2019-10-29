import React, { useState, useEffect } from 'react';
import { 
  IonList,
  IonListHeader,
  IonCardHeader,
  IonCard,
  IonCardSubtitle,
  IonCardTitle
 } from '@ionic/react';
import { listPosts } from '../../api/actions/messages/listForums';
import { MemoryMessage } from './memoryMessage';


interface ForumListProps {
  name: string,
  id: string
}

interface Post {
    title: string,
    author: string,
    date: number,
    id: string
}

export const ForumList: React.FC<ForumListProps> = ({name, id}) => {
  const [ posts, setPosts ] = useState<Post[]>([])
  const [ openPost, setOpenPost] = useState<Post | null>()
  
  useEffect(()=>{
    listPosts(id).then((posts:Post[])=> setPosts(posts))
  },[id])

  const open = (post:Post) => {
    setOpenPost(post)
  }

  const close = () => {
    setOpenPost(null)
  }

  return (
    <>
      <IonList>
          <IonListHeader>{id}</IonListHeader>
          {posts.map(post=>(
              <IonCard key={post.id} button onClick={()=>open(post)}>
                  <IonCardHeader>
                    <IonCardTitle>{post.title}</IonCardTitle>
                    <IonCardSubtitle>on {new Date(post.date).toLocaleDateString()}</IonCardSubtitle>
                  </IonCardHeader>
              </IonCard>
          ))}
      </IonList>
      { openPost && <MemoryMessage show={openPost !== null} close={close} forumId={id} postId={openPost.id} title={openPost.title}/> }

    </>
  );
};