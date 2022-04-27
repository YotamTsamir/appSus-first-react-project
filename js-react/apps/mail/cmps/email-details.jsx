
import { EmailNav } from "./email-nav.jsx"
import { MailService } from "../services/mail.service.js"

export class EmailDetails extends React.Component {
    state = {
        email: null
    }

    componentDidMount() {
        this.loadEmail()
        
    }   

    loadEmail = () => {
        // const emailId = this.props.match.params.mailId
        const emailId = this.props.email.id
        console.log(emailId)
        MailService.getMailById(emailId)
            .then(email => {
                this.setState({ email })
                console.log(email)
            })

    }

    render() {
        const {email} = this.state
        if (!email) return <h1>Loading...</h1>
        return <section className="emails-section">
            <div className="mail-details">
            <p><span className="bold">{email.sentFrom}:</span> {email.from}</p>
            <h1>{email.subject}</h1>
            <p className="email-body">{email.body}</p>
            </div>
        </section>
    }
}