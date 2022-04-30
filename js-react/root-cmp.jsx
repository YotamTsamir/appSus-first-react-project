import { AppHeader } from "./cmps/app-header.jsx"

import { NotesApp } from "../js-react/apps/keep/pages/notes-app.jsx"
import { MailApp } from "./apps/mail/pages/app-mail.jsx"
import { Books } from "./apps/book/pages/books.jsx"
import { BookDetails } from "./apps/book/cmps/book-details.jsx"
import { EmailDetails} from "./apps/mail/cmps/email-details.jsx"
import { NewMail } from "./apps/mail/cmps/new-mail.jsx"

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM


export class App extends React.Component {
    state = {
        app: '',
        searchTerm: ''
    }

    onSearch = (app, searchTerm) => {
        this.setState({app, searchTerm})
    }

    render() {
        const {app, searchTerm} = this.state
        return <Router>
    <section className="app">
    <AppHeader onSearch={this.onSearch}/>
        <main>
        <Switch>
        <Route path='/home/:bookId' component={BookDetails}/>
        <Route path='/mail' render={(props) => <MailApp {...props} searchTerm={app === 'mail' ? searchTerm : ''} />}/>
        <Route path='/notes/:mailDetails' render={(props) => <NotesApp {...props} searchTerm={app === 'notes' ? searchTerm : ''}/>}/>
        <Route path='/books' component={Books}/>
        </Switch>
        </main>
    </section>
    </Router>
    }

}
