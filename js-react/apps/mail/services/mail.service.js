import { utilService } from '../../../services/util.service.js'

export const MailService = {
    query,
    getMailById,
    addSentMail
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
    sentAt: 1551133930594,
    sentFrom: loggedinUser.fullname,
    from: 'user@appsus.com',
    to: 'momo@momo.com'
},
{
    id: 'mail102',
    subject: 'How are you?',
    body: 'you stupid puki Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quas iusto blanditiis eius magni inventore maiores quasi? Ullam dolorum ut'
    ,
    isRead: true,
    sentAt: 1551133930594,
    sentFrom:'gazibo shlaga',
    from:'gazibo@inc.com',
    to: 'user@appsus.com'
}, {
    id: 'mail103',
    subject: 'I like puki a lot',
    body: 'do you think he likes me to?',
    isRead: false,
    sentAt: 1551133930594,
    sentFrom: 'fomo',
    from: 'fomo@shlaga.com',
    to: 'user@appsus.com'
},
{
    id: 'mail104',
    subject: 'You want to ride horses?',
    body: 'if you want to ride horses contact me at my phone or shlaga baga bing bong bing bong',
    isRead: false,
    sentAt: 1551133930594,
    sentFrom:  loggedinUser.fullname,
    from: 'user@appsus.com',
    to: 'fomo@appsus.com'
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
    to: 'user@appsus.com'
}

function addSentMail(to,subject,body){
    let mails = gEmails;
    mails.push({id:utilService.makeId(),
    subject,body,isRead:true,sentAt:Date.now(),from:loggedinUser.email,sentFrom:loggedinUser.fullname,to})
}

function query(critiria) {
    let emails = gEmails
    let inboxMails = emails.filter(mail => mail.to === loggedinUser.email)
    let sentMails = emails.filter(mail => mail.from === loggedinUser.email)
    if (critiria === 'inbox') return Promise.resolve(inboxMails)
    else if (critiria === 'sent') return Promise.resolve(sentMails)
    // return Promise.resolve(emails)
}

function getMailById(mailId) {
    let mails = gEmails
    const currMail = mails.find(mail => mail.id === mailId)
    return Promise.resolve(currMail)
}

