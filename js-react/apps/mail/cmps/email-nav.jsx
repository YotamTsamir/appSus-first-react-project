const {Link,withRouter} = ReactRouterDOM
export class EmailNav extends React.Component{
    state = {
        filter:null
    }
    
    render(){
        return <nav className="email-nav">
              <button onClick={()=>this.props.onNewEmail()}>New email</button>
                <p onClick={() => this.props.changeStateCritiria('inbox')}>inbox</p>
                <p onClick={() => this.props.changeStateCritiria('sent')}>sent</p>
                <p>starred</p>
                <p>draft</p>
        </nav>
    }
}