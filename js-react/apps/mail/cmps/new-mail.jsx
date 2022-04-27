import { EmailNav } from "./email-nav.jsx"
import { MailService } from "../services/mail.service.js"

export class NewMail extends React.Component{

    state = {
        to:'',
        subject:'',
        body:'',
    }

    handleChange = ({target}) => {
        const value = target.value
        const mailPart = target.name
        this.setState({[mailPart]:value})
    }

    onSendEmail = (ev) => {
        ev.preventDefault()
        const {to,subject,body} = this.state
        MailService.addSentMail(to,subject,body)
        this.props.onSentMail()
        console.log('mail sent!')
    }

    render(){
        const {to,subject,body} = this.state
        return <section>
            <form className="new-mail" onSubmit={this.onSendEmail}>
                <input value={to} type="text" name="to" placeholder="to" onChange={this.handleChange}/>
                <input type="text" name="cc" placeholder="cc" />
                <input value={subject} type="text" name="subject" placeholder="title" onChange={this.handleChange}/>
             <textarea value={body} name="body" id="" cols="30" rows="10" placeholder="enter messege here" onChange={this.handleChange}></textarea>
             <button className="send-btn">send!</button>
            </form>
       
        </section>
    }
}