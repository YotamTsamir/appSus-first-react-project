
const {NavLink,withRouter} = ReactRouterDOM

function _AppHeader(props){
    return <header>
        <h3>The gazibos</h3>
        <nav>
            <NavLink to='/mail'>Mail</NavLink>
            <NavLink to='/notes'>Notes</NavLink>
            <NavLink to='/books'>Books</NavLink>
        </nav>
    </header>
}

export const AppHeader = withRouter(_AppHeader)