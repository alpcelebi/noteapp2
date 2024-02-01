

import {useState,useEffect} from 'react'
import { useFirestore } from '../hooks/useFirestore'

export default function NoteForm({uid}) {

    const [baslik,setBaslik]=useState('')
    const [aciklama,setAciklama]=useState ('')
    const {dokumanEkle,response}=useFirestore('notlar')

    const handleSubmit = async (e)=>{

        e.preventDefault();

        const not = {baslik,aciklama}

       dokumanEkle({
          uid,baslik,aciklama
       })

    }

      useEffect(()=>{

        if(response.success){
          setBaslik('')
          setAciklama('')
        }


      },[response.success])

  return (
       
    <form  className='create' onSubmit={handleSubmit}>
        <h3>Yeni Not Ekle</h3>

        <label >Not Başlığı : </label>
        <input type="text"   onChange={(e)=>setBaslik(e.target.value)} value={baslik}/>

        <label >Not Açıklaması : </label>
        <input type="text"   onChange={(e)=>setAciklama(e.target.value)} value={aciklama}/>

        <button>Not Ekle</button>

    </form>


  )
}
