import { utilService } from "../../../services/util.service.js";
import { notesService } from "../services/note.service.js";
import { ColorInput } from "../cmps/color-input.jsx";
export class NotesDetails extends React.Component {
  myRefTxt = React.createRef();
  myRefImg = React.createRef();
  imgRef = React.createRef();
  myRefVideo = React.createRef();
  myRefTodos = React.createRef();
  state = {
    isColorInputShown: false,
    txtInputValue: this.props.emailBody || "",
    note: {
      id: utilService.makeId(),
      type: "note-txt",
      isPinned: false,
      backgroundColor: "",
      info: {
        txt: "",
        url: "",
        title: this.props.emailSubject || "",
        todos: [],
      },
    },
  };

  componentDidUpdate(prevProps) {
    if (prevProps.emailData !== this.props.emailData) {
      const { emailSubject, emailBody, emailSentFrom } = this.props.emailData;
      this.setState(
        {
          txtInputValue: emailBody,
          note: { ...this.state.note, title: emailSubject },
        }
      );
    }
  }

  onHandleChangeTxt = ({ target }) => {
    this.setState({ txtInputValue: target.value });
  };

  onHandleChangeTitle = ({ target }) => {
    this.setState({
      note: {
        ...this.state.note,
        info: { ...this.state.note.info, title: target.value },
      },
    });
  };

  clearForm = () => {
    notesService.addNote(this.state.note).then(() => {
      this.setState({ txtInputValue: "" });
      this.setState({ note: { ...this.state.note, id: utilService.makeId() } });
      this.setState({ note: { ...this.state.note, type: "note-txt" } });
      this.setState({
        note: {
          ...this.state.note,
          info: { ...this.state.note.info, txt: "" },
        },
      });
      this.setState({
        note: {
          ...this.state.note,
          info: { ...this.state.note.info, title: "" },
        },
      });
      this.setState({
        note: {
          ...this.state.note,
          info: { ...this.state.note.info, todos: [] },
        },
      });
      this.props.onAddNote();
    });
  };

  onImgInput = (ev) => {
    notesService.loadImageFromInput(ev).then((imgSrc) => {
      this.setState({
        note: {
          ...this.state.note,
          type: "note-img",
          info: { ...this.state.note.info, url: imgSrc },
        },
      });
      this.imgRef.current.style.display = "block";
      this.imgRef.current.src = imgSrc;
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    switch (this.state.note.type) {
      case "note-img":
        this.imgRef.current.src = "";
        this.clearForm();
        break;
      case "note-video":
        const newValue = this.state.txtInputValue.replace("watch?v=", "embed/");
        this.setState(
          {
            note: {
              ...this.state.note,
              info: { ...this.state.note.info, url: newValue },
            },
          },
          this.clearForm
        );
        break;
      case "note-todos":
        const newTodoTxts = this.state.txtInputValue.split(",");
        const newTodo = newTodoTxts.map((todoTxt) => {
          return { txt: todoTxt, doneAt: null };
        });
        this.setState(
          {
            note: {
              ...this.state.note,
              info: { ...this.state.note.info, todos: newTodo },
            },
          },
          this.clearForm
        );
        break;
      default:
        this.setState(
          {
            note: {
              ...this.state.note,
              info: { ...this.state.note.info, txt: this.state.txtInputValue },
            },
          },
          this.clearForm
        );
        break;
    }
  };
  onHandleStyleChange = (value) => {
    this.setState({ note: { ...this.state.note, backgroundColor: value } });
  };
  onSetNoteType = (event) => {
    if (event.target.id === "note-txt") {
      this.myRefTxt.current.classList.add("selected-format");
      this.myRefImg.current.classList.remove("selected-format");
      this.myRefVideo.current.classList.remove("selected-format");
      this.myRefTodos.current.classList.remove("selected-format");
    } else if (event.target.id === "note-img") {
      this.myRefImg.current.classList.add("selected-format");
      this.myRefTxt.current.classList.remove("selected-format");
      this.myRefVideo.current.classList.remove("selected-format");
      this.myRefTodos.current.classList.remove("selected-format");
    } else if (event.target.id === "note-video") {
      this.myRefVideo.current.classList.add("selected-format");
      this.myRefTodos.current.classList.remove("selected-format");
      this.myRefTxt.current.classList.remove("selected-format");
      this.myRefImg.current.classList.remove("selected-format");
    } else if (event.target.id === "note-todos") {
      this.myRefTodos.current.classList.add("selected-format");
      this.myRefTxt.current.classList.remove("selected-format");
      this.myRefImg.current.classList.remove("selected-format");
      this.myRefVideo.current.classList.remove("selected-format");
    }
    this.setState({ note: { ...this.state.note, type: event.target.id } });
  };

  toggleColorInput = () => {
    this.setState({ isColorInputShown: !this.state.isColorInputShown });
  };
  getPlaceholder = () => {
    switch (this.state.note.type) {
      case "note-img":
        return "Enter image URL...";
      case "note-video":
        return "Enter Youtube URL...";
      case "note-todos":
        return "Enter todos seperated by commas. ex: Make my bed, Water the plants";
      default:
        return "Take a note..";
    }
  };
  // {this.state.note.type !== 'note-txt' && this.state.note.type !== 'note-todos' && }
  render() {
    const { txt, url, title, todos } = this.state.note.info;
    const value = this.state.txtInputValue;
    return (
      <div className="form-container">
        <form
          style={{ backgroundColor: this.state.note.backgroundColor }}
          className="form-submit"
          onSubmit={this.onSubmit}
        >
          <div className="input-submit">
            <img src="" className="my-img" ref={this.imgRef} />
            <input
              className="input-submit-title"
              style={{ backgroundColor: this.state.note.backgroundColor }}
              autoComplete="off"
              type="text"
              placeholder="Title..."
              onChange={this.onHandleChangeTitle}
              name="title"
              value={title}
            />
            <input
              style={{ backgroundColor: this.state.note.backgroundColor }}
              autoComplete="off"
              className="input-submit-txt "
              type="text"
              placeholder={this.getPlaceholder()}
              onChange={this.onHandleChangeTxt}
              name="txt"
              value={value}
            />
            <section className="actions-container">
              <button
                onClick={this.onSetNoteType}
                style={{ backgroundColor: this.state.note.backgroundColor }}
                type="button"
              >
                <i
                  ref={this.myRefTxt}
                  id="note-txt"
                  style={{ backgroundColor: this.state.note.backgroundColor }}
                  className="fa-solid fa-a selected-format"
                ></i>
              </button>
              <button
                id="file-btn"
                type="button"
                style={{ backgroundColor: this.state.note.backgroundColor }}
              >
                {" "}
                <input
                  type="file"
                  className="file-input btn"
                  name="image"
                  onChange={this.onImgInput}
                  style={{ backgroundColor: this.state.note.backgroundColor }}
                />
                <i
                  ref={this.myRefImg}
                  id="note-img"
                  className="fa-solid fa-image"
                ></i>
              </button>
              <button
                style={{ backgroundColor: this.state.note.backgroundColor }}
                onClick={this.onSetNoteType}
                type="button"
              >
                <i
                  style={{ backgroundColor: this.state.note.backgroundColor }}
                  ref={this.myRefVideo}
                  id="note-video"
                  className="fa-brands fa-youtube"
                ></i>
              </button>
              <button
                onClick={this.onSetNoteType}
                style={{ backgroundColor: this.state.note.backgroundColor }}
                className="last-action-btn"
                type="button"
              >
                <i
                  ref={this.myRefTodos}
                  id="note-todos"
                  className="fa-solid fa-list-ul"
                  style={{ backgroundColor: this.state.note.backgroundColor }}
                ></i>
              </button>
              <button
                style={{ backgroundColor: this.state.note.backgroundColor }}
                type="button"
                className="input-color-btn"
                onClick={this.toggleColorInput}
              >
                <ColorInput
                  handleStyleChange={(value) => this.onHandleStyleChange(value)}
                  isShown={this.state.isColorInputShown}
                />
                <i
                  style={{ backgroundColor: this.state.note.backgroundColor }}
                  className="fa-solid fa-palette"
                ></i>
              </button>
            </section>
            <input className="form-submit-btn" type="submit" value="submit" />
          </div>
        </form>
      </div>
    );
  }
}
