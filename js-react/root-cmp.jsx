import { AppHeader } from "./cmps/app-header.jsx"
import { MailApp } from "./apps/mail/pages/app-mail.jsx"
import { NotesApp } from "./pages/app-notes.jsx"
import { BookApp } from "./pages/app-books.jsx"
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
        <Route path='/mail/:mailId' component={EmailDetails}/>
        <Route path='/mail' component={MailApp}/>
        <Route path='/notes' component={NotesApp}/>
        <Route path='/books' component={BookApp}/>
        </Switch>
        </main>
    </section>
    </Router>

}
