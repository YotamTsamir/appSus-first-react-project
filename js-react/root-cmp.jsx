import { AppHeader } from "./cmps/app-header.jsx"
import { MailApp } from "./pages/app-mail.jsx"
import { NotesApp } from "./pages/app-notes.jsx"
import { BookApp } from "./pages/app-books.jsx"

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM


export function App() {
    return <Router>
    <section className="app">
    <AppHeader/>
        <main>
        <Switch>
        <Route path='/mail' component={MailApp}/>
        <Route path='/notes' component={NotesApp}/>
        <Route path='/books' component={BookApp}/>
        </Switch>
        </main>
    </section>
    </Router>

}
