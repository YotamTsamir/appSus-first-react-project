import { LongText } from "./long-text.jsx";


export function EmailPreview({ email, onClickMail, onCheckStar, onDeleteEmail }) {
    let isRead = 'bold';
    let bcg = 'grey';
    let regular;
    if (!email.isChecked) regular = '-regular'
    else regular = ''
    if (email.isRead) {
        isRead = ''
        bcg = ''
    }
    let time = new Date(email.sentAt)
    let year = time.getFullYear()
    // let month = time.getMonth()
    let month = time.toLocaleString('default', { month: 'short' });
    let day = time.getDate()
    let date = day + '/' + month + '/' + year
    return <section>

        <div className={`email ${bcg}`}>
            <div className="star">
                <i onClick={() => { onCheckStar(email) }} className={`fa${regular} fa-star star ${email.isChecked}`}></i>
            </div>

            <div className="mail-info flex space-between" onClick={() => onClickMail(email)}>
                <p className={isRead}>{email.subject}</p>
                <LongText text={email.body} />
                <p>{date}</p>
            </div>
            <i onClick={() => { onDeleteEmail(email.id) }} className="fa-solid fa-trash hidden"></i>
        </div>
    </section>


}
