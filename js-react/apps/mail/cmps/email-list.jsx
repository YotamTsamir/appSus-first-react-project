import { EmailPreview } from "./email-preview.jsx"

export function EmailList({emails,onClickMail,onCheckStar,onDeleteEmail,onOpenMail}){
    return emails.map(email => <EmailPreview onOpenMail={onOpenMail} onDeleteEmail={onDeleteEmail} onCheckStar={onCheckStar} email={email} onClickMail={onClickMail} key={email.id}/>)
}