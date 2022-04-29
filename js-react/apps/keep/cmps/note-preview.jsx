import { notesService } from "../services/note.service.js"
import { NoteEdit } from "./note-edit.jsx";
const {NavLink,withRouter} = ReactRouterDOM
export function NotePreview({note, onDeleteNote, onEditNote}){
    
    const onDeleteNotePreview = (event) => {
        console.log(event);
        event.stopPropagation()
        notesService.deleteNote(note.id).then(() => {
            onDeleteNote();
        })
    }

    const selectNote = () => {
        onEditNote(note)
    }

    if(note.type === "note-txt"){
        console.log(note)
        return <div onClick={selectNote} className="note" key={note.id} style={{backgroundColor: note.backgroundColor}}>
            <div className="note-txt" >{note.info.txt}</div>
        <div className="thumbtack-btn-container" >
            <button hidden><i className="fa-solid fa-thumbtack"></i></button> 
        </div> 
            <div className="trash-btn-container">
            <div onClick={(ev)=> {ev.stopPropagation()}}><NavLink to={`/mail/:?noteTitle=${note.info.txt}`}>send as email</NavLink></div>
            <button onClick={onDeleteNotePreview}><i className="fa-solid fa-trash"></i></button>
            </div>
        </div>
    }
    if(note.type === "note-img"){
        return <div onClick={selectNote} className="note" key={note.id}>
        <img className="note-preview-img" src={note.info.url} alt="" />
        <div className="thumbtack-btn-container" >
            <button hidden><i className="fa-solid fa-thumbtack"></i></button> 
        </div>
        <div className="note-title" >{note.info.title}</div> 
        <div className="trash-btn-container">
            <button onClick={onDeleteNotePreview}><i className="fa-solid fa-trash"></i></button>
        </div>
    </div>
    }
    if(note.type === "note-video"){
        return <div onClick={selectNote} className="note" key={note.id}>
        <iframe width="260" height="200"
            src={note.info.url}>
        </iframe>
        <div className="note-title" >{note.info.title}</div>
        <div className="thumbtack-btn-container" >
            <button hidden><i  className="fa-solid fa-thumbtack"></i></button> 
        </div>
        <div className="trash-btn-container">
            <button onClick={onDeleteNotePreview}><i className="fa-solid fa-trash"></i></button>
        </div>
    </div> 
    }
    if(note.type === "note-todos"){
        const todos = note.info.todos
        return <div onClick={selectNote} className="note" key={note.id}>
        <div className="note-title" >{note.info.title}</div>
        {todos.map((todo, todoIdx) => {                  
            return <ul key={todoIdx}>
                <li className="note-todo-txt" >{todo.txt} </li>
            </ul> 
        })}
        <div className="thumbtack-btn-container" >
            <button hidden><i className="fa-solid fa-thumbtack"></i></button> 
        </div>
        <div className="trash-btn-container">
            <button onClick={onDeleteNotePreview}><i className="fa-solid fa-trash"></i></button>
        </div>
    </div> 
    }
}