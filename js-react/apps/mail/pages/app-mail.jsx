import { MailService } from "../services/mail.service.js"

import { EmailNav } from "../cmps/email-nav.jsx"
import { EmailList } from "../cmps/email-list.jsx"
import { NewMail } from "../cmps/new-mail.jsx"
import { EmailDetails } from "../cmps/email-details.jsx"


export class MailApp extends React.Component{
    state = {
        emails:[],
        critiria:'inbox',
        isNewEmail:false,
        isOpenMail:false,
        currOpenMail:{}
    }

    componentDidMount(){
        this.getEmails()
    }

    getEmails = () => {
        MailService.query(this.state.critiria)
        .then(emails =>{
            console.log('here')
            this.setState({emails:emails})
        })
    } 

    changeStateCritiria = (value) => {
        this.setState({isNewEmail:false,isOpenMail:false, critiria:value},()=>{this.getEmails()})
    }
    
    onNewEmail = () => {
        this.setState({isNewEmail:true,isOpenMail:false})
    }

    onSentMail = () => {
        this.setState({isNewEmail:false,isOpenMail:false})
    }

    onClickMail = (email) => {
        this.setState({isOpenMail:true,currOpenMail:email})
    }

    render(){
        const {emails,isNewEmail,isOpenMail} = this.state
        return <section>
            <div className="emails-section">
            <nav className="email-nav">
                <EmailNav onNewEmail={this.onNewEmail} changeStateCritiria={this.changeStateCritiria}/>
              
            </nav>
            <div className="preview">
            {!isNewEmail && !isOpenMail && <EmailList onClickMail={this.onClickMail} emails={emails}/>}
            {isNewEmail && <NewMail onSentMail={this.onSentMail}/>}
            {isOpenMail && <EmailDetails email={this.state.currOpenMail}/>}
            </div>
            </div>
        </section>
    }
}