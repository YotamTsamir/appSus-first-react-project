import { EmailPreview } from "./email-preview.jsx"

export function EmailList({emails,onClickMail,onCheckStar,onDeleteEmail}){
    return emails.map(email => <EmailPreview onDeleteEmail={onDeleteEmail} onCheckStar={onCheckStar} email={email} onClickMail={onClickMail} key={email.id}/>)
}