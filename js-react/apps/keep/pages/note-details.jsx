import { utilService } from "../../../services/util.service.js"
import { notesService } from "../services/note.service.js"

export class NotesDetails extends React.Component{
    myRefTxt= React.createRef()
    myRefImg= React.createRef()
    myRefVideo= React.createRef()
    myRefTodos= React.createRef()
    state = {
        txtInputValue: '',
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

    onHandleChangeTxt = ({target}) => {
        this.setState({...this.state, txtInputValue: target.value})    
    }
    
    onHandleChangeTitle = ({target}) => {
        this.setState({...this.state, note:{...this.state.note, info: {...this.state.note.info, title: target.value}}})
    }

    clearForm = () => {
        notesService.addNote(this.state.note).then(() => {
            this.setState({...this.state, txtInputValue: ''})
            this.setState({...this.state, note:{...this.state.note, id: utilService.makeId()}})
            this.setState({...this.state, note:{...this.state.note, type: 'note-txt'}})
            this.setState({...this.state, note:{...this.state.note, info: {...this.state.note.info, txt: ''}}})
            this.setState({...this.state, note:{...this.state.note, info: {...this.state.note.info, title: ''}}})
            this.setState({...this.state, note:{...this.state.note, info: {...this.state.note.info, todos: []}}})
            this.props.onAddNote()
        })
    }
    onImgInput = (ev) => {
        notesService.loadImageFromInput(ev).then((imgSrc) => {
            this.setState({...this.state, note:{...this.state.note, info: {...this.state.note.info, url: imgSrc}}}, this.clearForm)
            document.querySelector('.my-img').style.display = 'block'
            document.querySelector('.my-img').src = imgSrc;
        })
    }
    onSubmit = (event) => {
        event.preventDefault()
        switch(this.state.note.type){
            case "note-img":
                break
            case "note-video":
                const newValue = this.state.txtInputValue.replace('watch?v=', 'embed/')
                this.setState({...this.state, note:{...this.state.note, info: {...this.state.note.info, url: newValue}}}, this.clearForm)
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

    onSetNoteType = (event) => {    
        if(event.target.id === "note-txt") {
            this.myRefTxt.current.classList.add("selected-format")
            this.myRefImg.current.classList.remove("selected-format")
            this.myRefVideo.current.classList.remove("selected-format")
            this.myRefTodos.current.classList.remove("selected-format")


        } else if(event.target.id === "note-img"){
            this.myRefImg.current.classList.add("selected-format")
            this.myRefTxt.current.classList.remove("selected-format")
            this.myRefVideo.current.classList.remove("selected-format")
            this.myRefTodos.current.classList.remove("selected-format")
            


        } else if(event.target.id === "note-video") {
            this.myRefVideo.current.classList.add("selected-format")
            this.myRefTodos.current.classList.remove("selected-format")
            this.myRefTxt.current.classList.remove("selected-format")
            this.myRefImg.current.classList.remove("selected-format")

        }else if(event.target.id === "note-todos") {
            this.myRefTodos.current.classList.add("selected-format")
            this.myRefTxt.current.classList.remove("selected-format")
            this.myRefImg.current.classList.remove("selected-format")
            this.myRefVideo.current.classList.remove("selected-format")
        }
        this.setState({...this.state, note:{...this.state.note, type: event.target.id}})
    }
    getPlaceholder = () => {
        switch(this.state.note.type){
            case "note-img":
                return "Enter image URL..." 
            case "note-video":
                return "Enter Youtube URL..."
            case "note-todos":
                return "Enter todos seperated by commas. ex: Make my bed, Water the plants"   
            default:
                return "Take a note.."
        }
    }

    render(){
        const {txt, url,title, label, todos} = this.state.note.info
        const value = this.state.txtInputValue;
        
        return <div className="form-container">
            <form className="form-submit" onSubmit={this.onSubmit}>
                <div className="input-submit">
                <img src="" className="my-img" />
                {this.state.note.type !== 'note-txt' && this.state.note.type !== 'note-todos' && <input className="input-submit-title" type="text" placeholder="Title..." onChange={this.onHandleChangeTitle} name="title" value={title}/>}
                <input className="input-submit-txt" type="text" placeholder={this.getPlaceholder()} onChange={this.onHandleChangeTxt} name="txt" value={value}/>                        
                <section className="actions-container">
                    <button onClick={this.onSetNoteType}  type="button"><i ref={this.myRefTxt} id="note-txt" className="fa-solid fa-a"></i></button>
                    
                    <button id="file-btn" type="button"> <input type="file" className="file-input btn" name="image" onChange={this.onImgInput} /><i ref={this.myRefImg}  id="note-img" className="fa-solid fa-image"></i></button>
                    <button onClick={this.onSetNoteType} type="button"><i ref={this.myRefVideo} id="note-video" className="fa-brands fa-youtube"></i></button>
                    <button onClick={this.onSetNoteType}  className="last-action-btn" type="button"><i ref={this.myRefTodos} id="note-todos" className="fa-solid fa-list-ul"></i></button>
                </section>
                <input className="form-submit-btn" type="submit" value="submit" />
                </div>
        </form> 
        </div>
    }
}