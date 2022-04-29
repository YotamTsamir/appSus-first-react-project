import {notesService} from '../services/note.service.js'
import { NoteList } from '../cmps/note-list.jsx'
import { NotesDetails } from './note-details.jsx'

export class NotesApp extends React.Component{

    state = {
        notes: []
    }

    componentDidMount(){
        this.loadNotes()
    }
    
    loadNotes = () => {
        notesService.query(this.state.notes)
        .then( notes => {
            this.setState({notes})
        })
    }

    onAddNote = () => {
        this.loadNotes()   
    }

    onDeleteNote = () => {
        this.loadNotes();
    }

    onNoteUpdated = () => {
        this.loadNotes();
    }

    render(){
        const notes = this.state.notes

        return <div key="note" className="notes-app">
            <NotesDetails onAddNote={this.onAddNote}/>
            <NoteList notes={notes} onDeleteNote={this.onDeleteNote} onNoteUpdated={this.onNoteUpdated}/>
        </div>
    }
}