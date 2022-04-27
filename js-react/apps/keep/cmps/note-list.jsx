import { NotePreview } from "./note-preview.jsx"

export function NoteList({notes, onDeleteNote}){

    return <section className="notes-list">   
        {notes.map(note=> <NotePreview note={note} key={note.id} onDeleteNote={onDeleteNote}/>)}
    </section>
}