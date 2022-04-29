import {notesService} from '../services/note.service.js'
import { NoteList } from '../cmps/note-list.jsx'
import { NotesDetails } from './note-details.jsx'


export class NotesApp extends React.Component{

    state = {
        notes: [],
        emailSentFrom: '',
        emailBody: '',
        mailSubject: '',

    }

    componentDidMount(){
        let emailData = new URLSearchParams(this.props.location.search)
        let emailSentFrom = emailData.get('mailFrom')  
        let emailBody = emailData.get('emailBody')
        let mailSubject = emailData.get('mailSubject')
        this.setState({emailSentFrom, mailSubject, emailBody}, ()=>{
            this.loadNotes()
        })


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
        const {emailBody, emailSentFrom, emailSubject} = this.state

        return <div key="note" className="notes-app">
            <NotesDetails onAddNote={this.onAddNote} emailData={{emailBody, emailSentFrom, emailSubject}}/>
            <NoteList  notes={notes} onDeleteNote={this.onDeleteNote} onNoteUpdated={this.onNoteUpdated}/>
        </div>
    }
}