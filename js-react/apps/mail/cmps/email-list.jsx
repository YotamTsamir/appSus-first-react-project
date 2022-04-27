import { EmailPreview } from "./email-preview.jsx"

export function EmailList({emails,onClickMail}){
    return emails.map(email => <EmailPreview email={email} onClickMail={onClickMail} key={email.id}/>)
}