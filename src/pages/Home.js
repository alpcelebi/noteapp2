import React from 'react';
import NoteForm from '../components/NoteForm';
import { useAuthContext } from '../hooks/useAuthConext';
import NotDetay from '../components/NotDetay';
import { useCollection } from '../hooks/useCollection';

  const Home=()=> {
  const { user } = useAuthContext();
  const { documents, error } = useCollection('notlar', ["uid", "==", user.uid], ["tarih", "desc"]);

  return (
    <div className='home'>
      <NoteForm uid={user.uid} />
      <hr />

      <div className='notlar'>
        {error && <div className='error'>{error}</div>}
        {documents &&
          documents.map((doc) => (
            <NotDetay not={doc} key={doc.id} />
          ))}
      </div>
    </div>
  );
}

export default Home
