import { AppHeader } from "./cmps/app-header.jsx"

import { NotesApp } from "../js-react/apps/keep/pages/notes-app.jsx"
import { MailApp } from "./apps/mail/pages/app-mail.jsx"
import { Books } from "./apps/book/pages/books.jsx"
import { BookDetails } from "./apps/book/cmps/book-details.jsx"
import { EmailDetails} from "./apps/mail/cmps/email-details.jsx"
import { NewMail } from "./apps/mail/cmps/new-mail.jsx"

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM


export function App() {
    return <Router>
    <section className="app">
    <AppHeader/>
        <main>
        <Switch>
        <Route path='/home/:bookId' component={BookDetails}/>
        <Route path='/mail' component={MailApp}/>
        <Route path='/notes/:mailDetails' component={NotesApp}/>
        <Route path='/books' component={Books}/>
        </Switch>
        </main>
    </section>
    </Router>

}
