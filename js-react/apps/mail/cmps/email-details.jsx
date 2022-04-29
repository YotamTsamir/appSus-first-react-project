
import { EmailNav } from "./email-nav.jsx"
import { MailService } from "../services/mail.service.js"
const {NavLink,withRouter} = ReactRouterDOM

export class EmailDetails extends React.Component {
    state = {
        email: null
    }

    componentDidMount() {
        this.loadEmail() 
    }   

    loadEmail = () => {
        const emailId = this.props.email.id
        console.log(emailId)
        MailService.getMailById(emailId)
            .then(email => {
                this.setState({ email })
            
            })

    }

    render() {
        const {email} = this.state
        if (!email) return <h1>Loading...</h1>
     
        return <section className={`emails-section`}>
            <div className="mail-details">
            <p className="email-details"><span className="bold">{email.sentFrom}:</span> {email.from}</p>
            <h1 className="email-details">{email.subject}</h1>
            <p className="email-body email-details">{email.body}</p>
           <NavLink to={`/notes/:?mailFrom=${email.sentFrom}&mailSubject=${email.subject}&&emailBody=${email.body}`}> <button className="send-btn send-note"><i className="fa-solid fa-paper-plane"></i></button></NavLink>
            </div>
        </section>
    }
}