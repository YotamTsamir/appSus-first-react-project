
export class EmailNav extends React.Component{
    state = {
        filter:null
    }
    
    render(){
        return <nav className="email-nav">
              <button className="add-mail-btn" onClick={()=>this.props.onNewEmail()}> <img className="add-mail" src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png" alt="" /> New email</button>
                <p onClick={() => this.props.changeStateCritiria('inbox')}><i className="fa-solid fa-inbox fa-nav"></i>inbox</p>
                <p onClick={() => this.props.changeStateCritiria('sent')}><i className="fa-solid fa-envelope-circle-check fa-nav"></i>sent</p>
                <p onClick={() => this.props.changeStateCritiria('starred')}><i className="fa-solid fa-star fa-nav"></i>starred</p>
                <p onClick={() => this.props.changeStateCritiria('draft')}><i className="fa-brands fa-firstdraft fa-nav"></i>draft</p>
        </nav>
    }
}