import { AppHeader } from "./cmps/app-header.jsx"

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM


export function App() {
    return <section className="app">
    <AppHeader/>
     <main>
      <h1>hello</h1>
        </main>
    </section>

}
