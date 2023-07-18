import React,{useState,useEffect} from 'react'
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const NotePage = ({match}) => {

    let noteId = match.params.id
    let [note,setNote] = useState(null)

    useEffect(()=>{
        getNote()
    },[noteId])

    let getNote = async ()=>{
        let response = await fetch(`http://127.0.0.1:8000/api/notes/${noteId}`)
        let data = await response.json()
        setNote(data)
    }

    // to send a update on the backend
    let updateNote = async() =>{
      fetch(`http://127.0.0.1:8000/api/notes/${noteId}/update/`,{
        method:"PUT",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(note)
      })
    }


  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to="/">
            <ArrowLeft/>
          </Link>
        </h3>
      </div>

      
      <textarea onChange={(e)=>{setNote({...note,'body':e.target.value})}} defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage
