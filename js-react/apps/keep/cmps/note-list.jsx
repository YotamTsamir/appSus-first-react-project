export function NoteList({notes}){

    return <section className="notes-list">   
        {notes.map((note, idx )=> {
            const todos = note.info.todos
            if(note.type === "note-txt"){
                return <div className="note" key={note.id}>
                    <div className="note-txt" >{note.info.txt}</div> 
                </div>
            }
            if(note.type === "note-img"){
                return <div className="note" key={note.id}>
                <div className="note-title" >{note.info.title}</div> 
                <img className="note-img" src={note.info.url}></img>
            </div>
            }
            if(note.type === "note-video"){
                return <div className="note" key={note.id}>
                <div className="note-title" >{note.info.title}</div>

                <iframe width="420" height="315"
                    src={note.info.url}>
                </iframe>
            </div> 
            }
            if(note.type === "note-todos"){
                return <div className="note" key={note.id}>
                <div>Label: {note.info.label}</div>
                {todos.map((todo, todoIdx) => {                  
                    return <ul key={todoIdx}>
                        <li className="note-todo-txt" >{todo.txt}</li>
                    </ul> 
                    
                })}
            </div> 
            }
        })}

    </section>
}