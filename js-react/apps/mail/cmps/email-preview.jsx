import { LongText } from "./long-text.jsx";


export function EmailPreview({ email,onClickMail }) {
    let isRead = 'bold';
    if (email.isRead) isRead = ''
    return  <div onClick={()=>onClickMail(email)} className="email">
        <p className={isRead}>{email.subject}</p>
        <LongText text={email.body}/>
        <p>{email.date}</p>
    </div>
   

}