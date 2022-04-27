import {notesService} from '../services/note.service.js'
import { NoteList } from '../cmps/note-list.jsx'
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



    render(){
        const notes = this.state.notes
        return <div key="note">
            <NoteList notes={notes}/>
        </div>
    }
}