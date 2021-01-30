import React, { useEffect, useState } from 'react';
import api from './services/api';
import { UserType, PostType } from './types/UserType';

function App() {

  const [user, setUser] = useState<UserType[]>()
  const [id, setId] = useState<number>()
  const [post, setPost] = useState<PostType[]>()

  useEffect(() =>{
    api.get(``)
    .then(response => setUser(response.data))
  }, [])

  useEffect(() => {
    api.get(`/${id}/posts`)
    .then(response => setPost(response.data))
  }, [id])
  
  return (
    <div className="App">

      {
        user?.map((i: UserType) => (
          <div key={i.id}>
            <p onClick={() => setId(i.id)}>{i.name}</p>
            <p>{i.id}</p>
          </div>
        ))
      }
      
      {
        post?.map((i: PostType) => (
          <>
            <div key={i.id}>
              <p><strong>{i.title}</strong></p>
              <p>{i.body}</p>
            </div>
          </>
        ))
      }
    </div>
  );
}

export default App;
