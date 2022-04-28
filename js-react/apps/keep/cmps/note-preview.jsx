import { notesService } from "../services/note.service.js"

export function NotePreview({note, onDeleteNote}){

    const onDeleteNotePreview = () => {
        notesService.deleteNote(note.id).then(() => {
            onDeleteNote();
        })
    }

    
    if(note.type === "note-txt"){
        return <div className="note" key={note.id}>
        <div className="thumbtack-btn-container" >
            <button hidden><i className="fa-solid fa-thumbtack"></i></button> 
        </div> 
            <div className="note-txt" >{note.info.txt}</div>
            <div className="trash-btn-container">
            <button onClick={() => onDeleteNotePreview(note.id)}><i className="fa-solid fa-trash"></i></button>
            </div>
        </div>
    }
    if(note.type === "note-img"){
        console
        return <div className="note" key={note.id}>
        <div className="thumbtack-btn-container" >
            <button hidden><i className="fa-solid fa-thumbtack"></i></button> 
        </div>
        
        <div className="note-title" >{note.info.title}</div> 
        <div className="trash-btn-container">
            <button onClick={() => onDeleteNotePreview(note.id)}><i className="fa-solid fa-trash"></i></button>
        </div>
    </div>
    }
    if(note.type === "note-video"){
        return <div className="note" key={note.id}>
        <div className="thumbtack-btn-container" >
            <button hidden><i  className="fa-solid fa-thumbtack"></i></button> 
        </div>
        <iframe width="260" height="200"
            src={note.info.url}>
        </iframe>
        <div className="note-title" >{note.info.title}</div>
        <div className="trash-btn-container">
            <button onClick={() => onDeleteNotePreview(note.id)}><i className="fa-solid fa-trash"></i></button>
        </div>
    </div> 
    }
    if(note.type === "note-todos"){
        const todos = note.info.todos
        return <div className="note" key={note.id}>
        <div className="thumbtack-btn-container" >
            <button hidden><i className="fa-solid fa-thumbtack"></i></button> 
        </div>
        <div className="note-title" >{note.info.title}</div>
        <div>{note.info.label}</div>
        {todos.map((todo, todoIdx) => {                  
            return <ul key={todoIdx}>
                <li className="note-todo-txt" >{todo.txt} </li>
            </ul> 
        })}
        <div className="trash-btn-container">
            <button onClick={() => onDeleteNotePreview(note.id)}><i className="fa-solid fa-trash"></i></button>
        </div>
    </div> 
    }
}