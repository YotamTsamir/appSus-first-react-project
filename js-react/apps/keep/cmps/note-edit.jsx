import { utilService } from "../../../services/util.service.js"
import { notesService } from "../services/note.service.js"

export class NoteEdit extends React.Component {
    state = {
        txtInputValue: "",
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
                todos: []       
            },
        }

    }
    componentDidMount() {
        this.setState({...this.state, note: this.props.note})
    }

    componentDidUpdate(prevProps) {
        if (prevProps.note !== this.props.note) {
            this.setState({txtInputValue: this.props.note.info.txt, note: this.props.note})
        }
    }

    clearForm = () => {
        notesService.editNote(this.state.note).then(() => {
            this.props.onNoteUpdated()
        })
        this.props.onCloseModal()
    }

    onSubmit = (event) => {
        event.preventDefault()
        switch(this.state.note.type){
            case "note-img":
                break
            case "note-video":
                // const newValue = this.state.txtInputValue.replace('watch?v=', 'embed/')
                this.setState({...this.state, note:{...this.state.note, info: {...this.state.note.info, title: this.state.note.info.title}}}, this.clearForm)
                break
            case "note-todos":
                const newTodoTxts = this.state.txtInputValue.split(',')
                const newTodo = newTodoTxts.map((todoTxt => {
                    return {txt: todoTxt, doneAt: null}
                }))
                this.setState({...this.state, note:{...this.state.note, info: {...this.state.note.info, todos: newTodo}}}, this.clearForm)
                break
            default : 
                this.setState({...this.state, note:{...this.state.note, info: {...this.state.note.info, txt: this.state.txtInputValue}}}, this.clearForm)
                break     
        }
    }

    onHandleChangeTxt = ({target}) => {
        this.setState({...this.state, txtInputValue: target.value})    
    }
    
    onHandleChangeTitle = ({target}) => {
        this.setState({...this.state, note:{...this.state.note, info: {...this.state.note.info, title: target.value}}})
    }

    noteEditClass = () => {
        return `note-app-note-edit ${this.props.isShown ? 'shown' : ''}`
    }

    render() {
        if(!this.state.note) return <h1 style={{display: 'none'}}>Loading...</h1> 
        const {txt, url,title, label, todos} = this.state.note.info
        const value = this.state.txtInputValue;
        return <div className={this.noteEditClass()}>
                <div className="form-container">
            <form className="form-submit form-submit-edit" onSubmit={this.onSubmit}>
                <div className="input-submit">
                <img src="" className="my-img" />
                {this.state.note.type !== 'note-txt' && this.state.note.type !== 'note-todos' && <input className="input-submit-title" type="text" placeholder="Title..." onChange={this.onHandleChangeTitle} name="title" value={title}/>}
                <input className="input-submit-txt " type="text" placeholder="Take a note..." onChange={this.onHandleChangeTxt} name="txt" value={value}/>                        
                <input className="form-submit-btn" type="submit" value="submit" />
                </div>
            </form> 
            </div>
                <button onClick={this.props.onCloseModal}>Close</button>
                </div>
    }
    

}