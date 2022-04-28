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
    isRead: true,
    sentAt: 1551133960597,
    sentFrom: loggedinUser.fullname,
    from: 'user@appsus.com',
    to: 'momo@momo.com',
    isChecked: false,
    isDraft: false,
    isTrash: false
},
{
    id: 'mail102',
    subject: 'How are you?',
    body: 'you stupid puki Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quas iusto blanditiis eius magni inventore maiores quasi? Ullam dolorum ut'
    ,
    isRead: true,
    sentAt: 1571163930294,
    sentFrom: 'Bonkers shlaga',
    from: 'gazibo@inc.com',
    to: 'user@appsus.com',
    isChecked: false,
    isDraft: false,
    isTrash: false
}, {
    id: 'mail108',
    subject: 'Would you like some gefiltefish?',
    body: 'you stupid puki Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quas iusto blanditiis eius magni inventore maiores quasi? Ullam dolorum ut'
    ,
    isRead: false,
    sentAt: 1571663920294,
    sentFrom: 'gazibo shlaga',
    from: 'gazibo@inc.com',
    to: 'user@appsus.com',
    isChecked: false,
    isDraft: false,
    isTrash: false
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
    isDraft: false,
    isTrash: false
},
{
    id: 'mail104',
    subject: 'You want to ride horses?',
    body: 'if you want to ride horses contact me at my phone or shlaga baga bing bong bing bong',
    isRead: true,
    sentAt: 1531163930594,
    sentFrom: loggedinUser.fullname,
    from: 'user@appsus.com',
    to: 'fomo@appsus.com',
    isChecked: false,
    isDraft: false,
    isTrash: false
}, {
    id: 'mail105',
    subject: 'I forgot to ask you if?',
    body: 'you want that Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quas iusto blanditiis eius magni inventore maiores quasi? Ullam dolorum ut'
    ,
    isRead: true,
    sentAt: 1571163930294,
    sentFrom: 'gazibo shlaga',
    from: 'gazibo@inc.com',
    to: 'user@appsus.com',
    isChecked: false,
    isDraft: false,
    isTrash: false
}, {
    id: 'mail106',
    subject: 'If you want to get',
    body: 'You better Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quas iusto blanditiis eius magni inventore maiores quasi? Ullam dolorum ut'
    ,
    isRead: true,
    sentAt: 1541163930574,
    sentFrom: 'yonk shlonk',
    from: 'gazibo@inc.com',
    to: 'user@appsus.com',
    isChecked: false,
    isDraft: false,
    isTrash: false
}, {
    id: 'mail107',
    subject: 'Nihil atque nesciunt, nobis sunt iure exercitationem. Nemo similique doloribus aliquid molestias eveniet! Doloremque laboriosam placeat quod molestiae, suscipit voluptas iusto architecto ut non et fuga dicta dolorum sint ducimus.    ',
    body: 'Odit dicta illum quaerat doloribus quasi repudiandae iure minus! Corrupti velit, minima consectetur labore vero incidunt voluptatem hic quo numquam laborum odio eos. Dignissimos aliquid veniam, est eum laborum quos.    '
    ,
    isRead: false,
    sentAt: 1541163930574,
    sentFrom: 'muki puk',
    from: 'gazibo@inc.com',
    to: 'user@appsus.com',
    isChecked: false,
    isDraft: false,
    isTrash: false
}, {
    id: 'mail120',
    subject: 'If you want to get',
    body: 'Quibusdam suscipit enim veritatis cupiditate hic eum mollitia eaque quos ducimus, tempora minima iusto magni quisquam rerum dolores nostrum iste quae dolor modi perferendis nulla? Labore quam in necessitatibus consequatur.    '
    ,
    isRead: false,
    sentAt: 1541163930574,
    sentFrom: 'puki cohen',
    from: 'gazibo@inc.com',
    to: 'user@appsus.com',
    isChecked: false,
    isDraft: false,
    isTrash: false
}, {
    id: 'mail109',
    subject: 'Nihil atque nesciunt, nobis sunt iure exercitationem. Nemo similique doloribus aliquid molestias eveniet! Doloremque laboriosam placeat quod molestiae, suscipit voluptas iusto architecto ut non et fuga dicta dolorum sint ducimus.    ',
    body: 'Esse veniam ad mollitia, ea, tempore iure, quibusdam ipsam cumque at molestiae iusto inventore error praesentium illo! Quas eveniet sequi debitis minima soluta ipsam aut eum corporis, dolores, placeat asperiores.    '
    ,
    isRead: false,
    sentAt: 1541163930574,
    sentFrom: 'bikni bonki',
    from: 'gazibo@inc.com',
    to: 'user@appsus.com',
    isChecked: false,
    isDraft: false,
    isTrash: false
}, {
    id: 'mail110',
    subject: 'If you want to get',
    body: 'A quidem laborum, quas incidunt corporis corrupti dicta deserunt architecto fuga praesentium modi? Ea, numquam dolore. Vitae iste hic magni ipsam dignissimos soluta autem doloremque libero? Maxime itaque suscipit dolorum.    '
    ,
    isRead: true,
    sentAt: 1541163930574,
    sentFrom: 'querg shlerg',
    from: 'gazibo@inc.com',
    to: 'user@appsus.com',
    isChecked: false,
    isDraft: false,
    isTrash: false
}, {
    id: 'mail111',
    subject: 'If you want to get',
    body: 'Corrupti, vel. Quibusdam distinctio vero maxime sint sequi, magni debitis? Maxime totam culpa possimus rem molestiae dolor perspiciatis, animi pariatur voluptate quo ducimus alias obcaecati deleniti ab repellendus dicta nam.    '
    ,
    isRead: false,
    sentAt: 1541163930574,
    sentFrom: 'gazibo shlaga',
    from: 'gazibo@inc.com',
    to: 'user@appsus.com',
    isChecked: false,
    isDraft: false,
    isTrash: false
}, {
    id: 'mail112',
    subject: 'If you want to get',
    body: 'Iure ut iusto explicabo quam ipsam, nulla a. Earum aliquam in quod molestias iste, enim repudiandae laboriosam repellat voluptate blanditiis praesentium animi labore dicta optio beatae architecto eius provident dolore.    '
    ,
    isRead: false,
    sentAt: 1541163930574,
    sentFrom: 'gazibo shlaga',
    from: 'gazibo@inc.com',
    to: 'user@appsus.com',
    isChecked: false,
    isDraft: false,
    isTrash: false
}, {
    id: 'mail113',
    subject: 'If you want to get',
    body: 'Culpa nemo recusandae sed hic, ad reiciendis facere dolorem adipisci excepturi eligendi repudiandae officiis ratione sunt ullam quidem assumenda deleniti, harum consectetur ipsum. Laborum exercitationem id cupiditate sunt ea incidunt!'
    ,
    isRead: false,
    sentAt: 1541163930574,
    sentFrom: 'gazibo shlaga',
    from: 'gazibo@inc.com',
    to: 'user@appsus.com',
    isChecked: false,
    isDraft: false,
    isTrash: false
}, {
    id: 'mail114',
    subject: 'If you want to get',
    body: 'Natus molestiae repellendus non tempora ratione, perspiciatis nihil? Ipsa optio quis ex consequuntur. Architecto vitae, alias debitis dolorem ab tenetur mollitia porro labore, perspiciatis beatae accusantium minima doloremque dolor impedit!'
    ,
    isRead: false,
    sentAt: 1541163930574,
    sentFrom: 'gazibo shlaga',
    from: 'gazibo@inc.com',
    to: 'user@appsus.com',
    isChecked: false,
    isDraft: false,
    isTrash: false
}, {
    id: 'mail115',
    subject: 'If you want to get',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sapiente libero sint, alias error possimus id assumenda doloremque incidunt? Nostrum natus ipsam corrupti recusandae doloremque! Cumque neque velit dolorum quasi?'
    ,
    isRead: false,
    sentAt: 1541163930574,
    sentFrom: 'gazibo shlaga',
    from: 'gazibo@inc.com',
    to: 'user@appsus.com',
    isChecked: false,
    isDraft: false,
    isTrash: false
},

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
    let email = gEmails[emailToDeleteIdx]
    if (!email.isTrash) email.isTrash = true
    else gEmails.splice(emailToDeleteIdx, 1)

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
    let inboxMails = emails.filter(mail => mail.to === loggedinUser.email && !mail.isTrash)
    let sentMails = emails.filter(mail => mail.from === loggedinUser.email && !mail.isDraft && !mail.isTrash)
    let isStar = emails.filter(mail => mail.isChecked === true && !mail.isTrash)
    let isDraft = emails.filter(mail => mail.isDraft === true && !mail.isTrash)
    let isTrash = emails.filter(mail => mail.isTrash === true)
    if (critiria === 'inbox') return Promise.resolve(inboxMails)
    else if (critiria === 'sent') return Promise.resolve(sentMails)
    else if (critiria === 'starred') return Promise.resolve(isStar)
    else if (critiria === 'draft') return Promise.resolve(isDraft)
    else if (critiria === 'trash') return Promise.resolve(isTrash)
    // return Promise.resolve(emails)
}

function getMailById(mailId) {
    let mails = gEmails
    const currMail = mails.find(mail => mail.id === mailId)
    return Promise.resolve(currMail)
}

