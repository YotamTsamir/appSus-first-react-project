import { notesService } from "../services/note.service.js"

export function NotePreview({note, onDeleteNote}){

    const onDeleteNotePreview = () => {
        notesService.deleteNote(note.id).then(() => {
            onDeleteNote();
        })
    }

    
    if(note.type === "note-txt"){
        return <div className="note" key={note.id}>
            <button><i className="fa-solid fa-thumbtack"></i></button> 
            <div className="note-title" >{note.info.title}</div>
            <div className="note-txt" >{note.info.txt}</div>
            <button onClick={() => onDeleteNotePreview(note.id)}><i className="fa-solid fa-trash"></i></button>
        </div>
    }
    if(note.type === "note-img"){
        return <div className="note" key={note.id}>
        <button><i className="fa-solid fa-thumbtack"></i></button> 
        <div className="note-title" >{note.info.title}</div> 
        <img className="note-img" src={note.info.url}></img>
        <button onClick={() => onDeleteNotePreview(note.id)}><i className="fa-solid fa-trash"></i></button>
    </div>
    }
    if(note.type === "note-video"){
        return <div className="note" key={note.id}>
        <button><i className="fa-solid fa-thumbtack"></i></button>
        <div className="note-title" >{note.info.title}</div>
        <iframe width="420" height="315"
            src={note.info.url}>
        </iframe>
        <button onClick={() => onDeleteNotePreview(note.id)}><i className="fa-solid fa-trash"></i></button>
    </div> 
    }
    if(note.type === "note-todos"){
        const todos = note.info.todos
        return <div className="note" key={note.id}>
        <button><i className="fa-solid fa-thumbtack"></i></button>
        <div className="note-title" >{note.info.title}</div>
        <div>Label: {note.info.label}</div>
        {todos.map((todo, todoIdx) => {                  
                console.log(todo)
            return <ul key={todoIdx}>
                <li className="note-todo-txt" >{todo.txt} </li>
            </ul> 
        })}
        <button onClick={() => onDeleteNotePreview(note.id)}><i className="fa-solid fa-trash"></i></button>
    </div> 
    }
}