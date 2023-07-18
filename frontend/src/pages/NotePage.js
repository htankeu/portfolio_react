import React,{useState,useEffect} from 'react'
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const NotePage = ({match,history}) => {

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

    // deleteNote
    let deleteNote = async () =>{
      fetch(`http://127.0.0.1:8000/api/notes/${noteId}/delete/`,{
        method:"DELETE",
        headers:{
          'Content-Type':'application/json'
        },
      })
      history.push('/')
    }

    let handleSubmit = ()=>{
      updateNote()
      history.push('/')
    }



  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
            <ArrowLeft onClick = {handleSubmit}/>
            <button onClick={deleteNote}>Delete</button>
        </h3>
      </div>

      
      <textarea onChange={(e)=>{setNote({...note,'body':e.target.value})}} defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage
