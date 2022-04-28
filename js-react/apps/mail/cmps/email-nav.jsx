
export class EmailNav extends React.Component{
    state = {
        inbox:'',
        starred:'',
    }
    
    componentDidMount(){
        this.onChangeColor()
    }

   


    onChangeColor = () => {
        switch (this.props.critiria) {
            case 'inbox':
                this.setState({inbox:'red'})
                break;
                case 'starred':
                    this.setState({inbox:'',starred:'red'})
                    break;
        
            default:
                break;
        }
    }

    render(){
        const {inbox,starred} = this.state
        return <nav className="email-nav">
              <button className="add-mail-btn" onClick={()=>this.props.onNewEmail()}> <img className="add-mail" src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png" alt="" /> 
              <div className="nav-txt">
              <p className="btn-txt">New email</p>
              </div>
              </button>
                <div className={`header-nav flex space-between`} onClick={() => this.props.changeStateCritiria('inbox')}>
                <i className="fa-solid fa-inbox fa-nav"></i>
                <div className="nav-txt">
                <p className="nav-head">Inbox</p>
                </div>
                </div>
                <div className={`header-nav flex space-between ${starred}`} onClick={() => this.props.changeStateCritiria('sent')}>
                <i className="fa-solid fa-envelope-circle-check fa-nav"></i>
                <div className="nav-txt">
                <p className="nav-head" >Sent</p>
                </div>
                </div>
                <div className="header-nav flex space-between" onClick={() => this.props.changeStateCritiria('starred')}>
                <i className="fa-solid fa-star fa-nav"></i>
                  <div className="nav-txt">
                <p className="nav-head">Starred</p>
                  </div>
                </div>
                <div className="header-nav flex space-between" onClick={() => this.props.changeStateCritiria('draft')}>
                <i className="fa-brands fa-firstdraft fa-nav"></i>
                  <div className="nav-txt">
                <p className="nav-head">Draft</p>
                  </div>
                </div>
                <div className="header-nav flex space-between" onClick={() => this.props.changeStateCritiria('trash')} >
                <i className="fa-solid fa-trash-can fa-nav trash"></i>
                  <div className="nav-txt">
                <p className="nav-head">Trash</p>
                  </div>
                </div>
        </nav>
    }
}