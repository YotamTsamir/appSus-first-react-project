import { EmailNav } from "./email-nav.jsx"
import { MailService } from "../services/mail.service.js"

export class NewMail extends React.Component {

    state = {
        to: '',
        subject: '',
        body: '',
        interval: ''
    }



    componentDidMount() {
        console.log(this.props.isDraft)
        const { to, subject, body } = this.state
        MailService.addSentMail(to, subject, body)
        let interval = setInterval(() => this.onDraft(), 3000)
        this.setState({ interval })
    }

    onDraft = () => {
        const { to, subject, body } = this.state
        MailService.editDraftEmail(to, subject, body)
    }

    componentWillUnmount() {
        clearInterval(this.state.interval)
        this.setState({ interval: '' })
        // clearInterval(interval)
    }


    handleChange = ({ target }) => {
        const value = target.value
        const mailPart = target.name
        this.setState({ [mailPart]: value })
    }


    onSendEmail = (ev) => {
        ev.preventDefault()
        MailService.sendLastMail()
        this.props.onSentMail()
        console.log('mail sent!')
    }

    render() {
        const { to, subject, body } = this.state
        return <section className="new-mail-section">
            <div className="new-mail-msg">
                <p className="new-msg">new messege</p>
            </div>
            <form className="new-mail" onSubmit={this.onSendEmail}>
                <input className="new-mail-input" autoComplete='off' value={to} type="email" name="to" placeholder="to" onChange={this.handleChange} />
                <input className="new-mail-input" autoComplete='off' value={subject} type="text" name="subject" placeholder="title" onChange={this.handleChange} />
                <textarea className="new-mail-input" autoComplete='off' value={body} name="body" id="" cols="30" rows="10" placeholder="enter messege here" onChange={this.handleChange}></textarea>
                <button className="send-btn">send!</button>
            </form>
                <button className="send-btn">Save as note!</button>

        </section>
    }
}