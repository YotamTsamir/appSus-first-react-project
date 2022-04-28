import { LongText } from "./long-text.jsx";


export function EmailPreview({ email, onClickMail, onCheckStar, onDeleteEmail, onOpenMail }) {
    let isRead = 'bold';
    let bcg = '';
    let envFav = <i onClick={() => { onOpenMail(email) }} className="fa-solid fa-envelope hidden"></i>
    let regular;
    if (!email.isChecked) regular = '-regular'
    else regular = ''
    if (email.isRead) {
        isRead = ''
        bcg = 'grey'
        envFav = <i onClick={() => { onOpenMail(email) }} className="fa-solid fa-envelope-open hidden"></i>
    }
    let time = new Date(email.sentAt)
    let year = time.getFullYear()
    let month = time.toLocaleString('default', { month: 'short' });
    let day = time.getDate()
    let date = day + '/' + month + '/' + year
    return <section>

        <div className={`email ${bcg} nav-head`}>
            <div className="star">
                <i onClick={() => { onCheckStar(email) }} className={`fa${regular} fa-star star ${email.isChecked}`}></i>
            </div>
            <div className="mail-info flex space-between" onClick={() => onClickMail(email)}>
            <div className="preview-txt title">
                <p className={isRead}>{email.sentFrom}</p>
                </div>
                <div className={`previe-txt ${isRead}`}>
                <LongText short={20} text={email.subject}/>
                </div>
                <p className="bold coma">-</p>
                <div className="preview-txt">
                <LongText short={20} text={email.body} />
                </div>
                <p className="date">{date}</p>
            </div>
            <div>
            <p className="phone-date">{date}</p>
            </div>
            {/* <i onClick={() => { onOpenMail() }} className="fa-solid fa-envelope hidden"></i> */}
            {envFav}
            <i onClick={() => { onDeleteEmail(email.id) }} className="fa-solid fa-trash hidden"></i>
        </div>
    </section>


}
