import { utilService } from "../../../services/util.service.js"
import { notesService } from "../services/note.service.js"

export class NotesDetails extends React.Component{
    state = {
        note: {
            id: utilService.makeId(),
            type: 'note-txt',
            isPinned: false,
            backgroundColor: '',
            info: {
                txt: '',
                url: '',
                title: '',
                label: '',
                todos: {
                    txt: '',
                },
            },

        }
    }
    onHandleChangeTxt = ({target}) => {
        this.setState({note:{...this.state.note, info: {...this.state.note.info, txt: target.value}}})
    }
    onHandleChangeTitle = ({target}) => {
        this.setState({note:{...this.state.note, info: {...this.state.note.info, title: target.value}}})    
    }
    onSubmit = (event) => {
        event.preventDefault()
        console.log('yotam is cute');
        notesService.addNote(this.state.note).then(() => {
            this.props.onAddNote()
        })
        this.setState({note:{...this.state.note, info: {...this.state.note.info, txt: ''}}})
        this.setState({note:{...this.state.note, info: {...this.state.note.info, title: ''}}})
    }
    onSetNoteType = (event) => {   
        console.log(event.target.id);    
            this.setState({note:{...this.state.note, type: event.target.id}})
    }

    render(){
        const {txt, url,title, label, todos} = this.state.note.info
        const todoTxt = todos.txt
        
        return <div className="form-container">
            <form className="form-submit" onSubmit={this.onSubmit}>
                {/* <div className="input-submit"> */}
                <input className="input-submit" type="text" placeholder="Title..." onInput={this.onHandleChangeTitle} name="title" defaultValue={title}/>
                <input className="input-submit" type="text" placeholder="Take a note..." onInput={this.onHandleChangeTxt} name="txt" defaultValue={txt}/>
                {/* </div> */}
                        {/* className="input-submit-txt"className="input-submit-title" */}
                <section className="actions-container">
                    <button  onClick={this.onSetNoteType} type="button"><i id="note-txt" className="fa-solid fa-a"></i></button>
                    <button onClick={this.onSetNoteType} type="button"><i  id="note-img" className="fa-solid fa-image"></i></button>
                    <button onClick={this.onSetNoteType} type="button"><i id="note-video" className="fa-brands fa-youtube"></i></button>
                    <button onClick={this.onSetNoteType}  className="last-action-btn" type="button"><i id="note-todos" className="fa-solid fa-list-ul"></i></button>
                </section>
                <input className="form-submit-btn" type="submit" value="submit" />
        </form> 
        </div>
    }
}