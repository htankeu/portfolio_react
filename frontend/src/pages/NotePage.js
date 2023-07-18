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


  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to="/">
            <ArrowLeft/>
          </Link>
        </h3>
      </div>

      
      <textarea defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage
