import { utilService } from '../../../services/util.service.js'

export const MailService = {
    query,
    getMailById,
    addSentMail,
    deleteEmail,
    editDraftEmail
}
const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

const gEmails = [{
    id: 'mail101',
    subject: 'I wanna party',
    body: 'All night long',
    isRead: false,
    sentAt: 1551133960597,
    sentFrom: loggedinUser.fullname,
    from: 'user@appsus.com',
    to: 'momo@momo.com',
    isChecked: false,
    isDraft: false
},
{
    id: 'mail102',
    subject: 'How are you?',
    body: 'you stupid puki Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quas iusto blanditiis eius magni inventore maiores quasi? Ullam dolorum ut'
    ,
    isRead: true,
    sentAt: 1571163930294,
    sentFrom: 'gazibo shlaga',
    from: 'gazibo@inc.com',
    to: 'user@appsus.com',
    isChecked: false,
    isDraft: false
}, {
    id: 'mail103',
    subject: 'I like puki a lot',
    body: 'do you think he likes me to?',
    isRead: false,
    sentAt: 1551133930594,
    sentFrom: 'fomo',
    from: 'fomo@shlaga.com',
    to: 'user@appsus.com',
    isChecked: false,
    isDraft: false
},
{
    id: 'mail104',
    subject: 'You want to ride horses?',
    body: 'if you want to ride horses contact me at my phone or shlaga baga bing bong bing bong',
    isRead: false,
    sentAt: 1531163930594,
    sentFrom: loggedinUser.fullname,
    from: 'user@appsus.com',
    to: 'fomo@appsus.com',
    isChecked: false,
    isDraft: false
}

]
const email = {
    id: utilService.makeId(),
    subject: 'I wanna party',
    body: 'All night long',
    isRead: false,
    sentAt: 1551133930594,
    sentFrom: 'shlomo',
    from: 'shlomo@shlaga.com',
    to: 'user@appsus.com',
    isChecked: false
}

function deleteEmail(emailId) {
    let emailToDeleteIdx = gEmails.findIndex(email => email.id === emailId)
    gEmails.splice(emailToDeleteIdx, 1)

}

function addSentMail(to, subject, body) {
    let mails = gEmails;
    let id;
    if (mails[mails.length - 1].isDraft) {
        id = mails[mails.length - 1].id
        mails[mails.length - 1].isDraft = false
        return
    }
    mails.push({
        id: utilService.makeId(),
        subject, body, isRead: true, sentAt: Date.now(), from: loggedinUser.email, sentFrom: loggedinUser.fullname, to, isChecked: false,
        isDraft: false
    })
}

function editDraftEmail(toWho, subjectOfText, bodyOfMail) {
    let mails = gEmails
    mails[mails.length - 1].to = toWho
    mails[mails.length - 1].subject = subjectOfText
    mails[mails.length - 1].body = bodyOfMail
    mails[mails.length - 1].isDraft = true
}

function query(critiria) {
    let emails = gEmails
    let inboxMails = emails.filter(mail => mail.to === loggedinUser.email)
    let sentMails = emails.filter(mail => mail.from === loggedinUser.email && !mail.isDraft)
    let isStar = emails.filter(mail => mail.isChecked === true)
    let isDraft = emails.filter(mail => mail.isDraft === true)
    if (critiria === 'inbox') return Promise.resolve(inboxMails)
    else if (critiria === 'sent') return Promise.resolve(sentMails)
    else if (critiria === 'starred') return Promise.resolve(isStar)
    else if (critiria === 'draft') return Promise.resolve(isDraft)
    // return Promise.resolve(emails)
}

function getMailById(mailId) {
    let mails = gEmails
    const currMail = mails.find(mail => mail.id === mailId)
    return Promise.resolve(currMail)
}

