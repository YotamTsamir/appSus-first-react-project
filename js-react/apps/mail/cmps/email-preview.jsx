import { LongText } from "./long-text.jsx";


export function EmailPreview({ email, onClickMail, onCheckStar, onDeleteEmail, onOpenMail }) {
    window.addEventListener('resize', () => {
        console.log(window.innerWidth)
    })
    let isRead = 'bold';
    let bcg = '';
    let envFav = <i onClick={(ev) => { onOpenMail(email), ev.stopPropagation() }} className="fa-solid fa-envelope hidden"></i>
    let regular;
    let titleLength = 50
    let bodyLength = 130
    if (!email.isChecked) regular = '-regular'
    else regular = ''
    if (email.isRead) {
        isRead = ''
        bcg = 'grey'
        envFav = <i onClick={(ev) => { onOpenMail(email), ev.stopPropagation() }} className="fa-solid fa-envelope-open hidden"></i>
    }
    let time = new Date(email.sentAt)
    let year = time.getFullYear()
    let month = time.toLocaleString('default', { month: 'short' });
    let day = time.getDate()
    let date = day + '/' + month + '/' + year
    return <div className={`email ${bcg} nav-head`}>
        <div className="star">
            <i onClick={() => { onCheckStar(email) }} className={`fa${regular} fa-star star ${email.isChecked}`}></i>
        </div>
        <div className="mail-info flex" onClick={() => onClickMail(email)}>
            <p className={`sent-from ${isRead}`}>{email.sentFrom}</p>
            <div className="text-preview flex">
                <LongText isBold={isRead} short={titleLength} text={email.subject} />
                <p className="bold coma"> - </p>
                <LongText isBold={''} short={bodyLength} text={email.body} />
            </div>
            <div className="date flex">
                <p className="date-write">{date}</p>
                <div className="pop">
                    {envFav}
                    <i onClick={(ev) => { onDeleteEmail(email.id), ev.stopPropagation() }} className="fa-solid fa-trash hidden"></i>
                </div>
            </div>
            <div>
                <p className="phone-date">{date}</p>
            </div>
            {/* <i onClick={() => { onOpenMail() }} className="fa-solid fa-envelope hidden"></i> */}

        </div>
    </div>
}






// {/* <div className="star">
// <i onClick={() => { onCheckStar(email) }} className={`fa${regular} fa-star star ${email.isChecked}`}></i>
// </div>
// <div className="mail-info flex" onClick={() => onClickMail(email)}>
// <div className="preview-txt title">
// <p className={isRead}>{email.sentFrom}</p>
// </div>
// <div className="preText flex space-between">

// <div className={`previe-txt ${isRead}`}>
// <LongText short={50} text={email.subject}/>
// </div>
// <p className="bold coma">-</p>
// {/* <div className="preview-txt"> */}
{/* // <LongText short={50} text={email.body} /> */ }
// {/* </div> */}
{/* // <div className="date"> */ }
{/* // <p className="date">{date}</p> */ }
{/* // </div> */ }
{/* // </div> */ }
{/* // </div> */ }
{/* // <div> */ }
{/* // <p className="phone-date">{date}</p> */ }
{/* // </div> */ }
{/* <i onClick={() => { onOpenMail() }} className="fa-solid fa-envelope hidden"></i> */ }
{/* // {envFav} */ }
{/* // <i onClick={() => { onDeleteEmail(email.id) }} className="fa-solid fa-trash hidden"></i> */ } 