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

  

    render(){
        const notes = this.state.notes
        return <div key="note">
            <NotesDetails onAddNote={this.onAddNote}/>
            <NoteList notes={notes} onDeleteNote={this.onDeleteNote}/>
        </div>
    }
}