import { utilService } from "../../../services/util.service.js"
import { notesService } from "../services/note.service.js"

export class NotesDetails extends React.Component{
    myRefTxt= React.createRef()
    myRefImg= React.createRef()
    myRefVideo= React.createRef()
    myRefTodos= React.createRef()
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
                todos: []       
            },
        }
    }

    onHandleChangeTxt = ({target}) => {
        switch(this.state.note.type){
            case "note-img":
                this.setState({note:{...this.state.note, info: {...this.state.note.info, url: target.value}}})
                break
            case "note-video":
                const newValue = target.value.replace('watch?v=', 'embed/')
                this.setState({note:{...this.state.note, info: {...this.state.note.info, url: newValue}}})
                break
            case "note-todos":
                this.setState({note:{...this.state.note, info: {...this.state.note.info, txt: target.value}}}) 
                break   
            default : 
                this.setState({note:{...this.state.note, info: {...this.state.note.info, txt: target.value}}})
                break     
        }
    }
    
    
    onHandleChangeTitle = ({target}) => {
        this.setState({note:{...this.state.note, info: {...this.state.note.info, title: target.value}}})    
    }



    onSubmit = (event) => {
        event.preventDefault()
        if(this.state.note.type === "note-todos"){
            const newTodoTxts = this.state.note.info.txt.split(',')
            const newTodo = newTodoTxts.map((todoTxt => {
                return {txt: todoTxt, doneAt: null}
            }))
            this.setState({note:{...this.state.note, info: {...this.state.note.info, todos: newTodo}}}, () => {
                notesService.addNote(this.state.note).then(() => {
                    this.setState({note:{...this.state.note, id: utilService.makeId()}})
                    this.setState({note:{...this.state.note, info: {...this.state.note.info, txt: ''}}})
                    this.setState({note:{...this.state.note, info: {...this.state.note.info, title: ''}}})
                    this.setState({note:{...this.state.note, info: {...this.state.note.info, todos: []}}})
                    this.props.onAddNote()
                })  
            })
            return
        }
        notesService.addNote(this.state.note).then(() => {
            this.setState({note:{...this.state.note, id: utilService.makeId()}})
            this.setState({note:{...this.state.note, info: {...this.state.note.info, txt: ''}}})
            this.setState({note:{...this.state.note, info: {...this.state.note.info, title: ''}}})
            this.setState({note:{...this.state.note, info: {...this.state.note.info, todos: []}}})
            this.setState({note:{...this.state.note, info: {...this.state.note.info, url: ''}}})
            this.props.onAddNote()
        })  
    }
    onSetNoteType = (event) => {    
        if(event.target.id === "note-txt") {
            this.myRefTxt.current.classList.add("selected-format")
            this.myRefImg.current.classList.remove("selected-format")
            this.myRefVideo.current.classList.remove("selected-format")
            this.myRefTodos.current.classList.remove("selected-format")
            console.log("txt ref", this.myRefTxt.current.classList)
            console.log("img ref", this.myRefImg.current.classList)

        } else if(event.target.id === "note-img"){
            this.myRefImg.current.classList.add("selected-format")
            this.myRefTxt.current.classList.remove("selected-format")
            this.myRefVideo.current.classList.remove("selected-format")
            this.myRefTodos.current.classList.remove("selected-format")
            console.log("txt ref", this.myRefTxt.current.classList)
            console.log("img ref", this.myRefImg.current.classList)

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
        
        
            this.setState({note:{...this.state.note, type: event.target.id}})
    }
    getPlaceholder = () => {
        switch(this.state.note.type){
            case "note-img":
                return "Enter image URL..." 
            case "note-video":
                return "Enter Youtube URL..."
            case "note-todos":
                return "Enter todos seperated by commas. ex: Clean the house, Make my bed, Water the plants"   
            default:
                return "Take a note.."
        }
    }

    render(){
        const {txt, url,title, label, todos} = this.state.note.info
        
        return <div className="form-container">
            <form className="form-submit" onSubmit={this.onSubmit}>
                <div className="input-submit">
                <input className="input-submit-title" type="text" placeholder="Title..." onChange={this.onHandleChangeTitle} name="title" value={title}/>
                <input className="input-submit-txt" type="text" placeholder={this.getPlaceholder()} onChange={this.onHandleChangeTxt} name="txt" value={txt}/>                        
                <section className="actions-container">
                    <button onClick={this.onSetNoteType}  type="button"><i ref={this.myRefTxt} id="note-txt" className="fa-solid fa-a"></i></button>
                    <button onClick={this.onSetNoteType} type="button"><i ref={this.myRefImg}  id="note-img" className="fa-solid fa-image"></i></button>
                    <button onClick={this.onSetNoteType} type="button"><i ref={this.myRefVideo} id="note-video" className="fa-brands fa-youtube"></i></button>
                    <button onClick={this.onSetNoteType}  className="last-action-btn" type="button"><i ref={this.myRefTodos} id="note-todos" className="fa-solid fa-list-ul"></i></button>
                </section>
                <input className="form-submit-btn" type="submit" value="submit" />
                </div>
        </form> 
        </div>
    }
}