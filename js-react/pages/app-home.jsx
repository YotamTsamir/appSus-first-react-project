const { Link } = ReactRouterDOM
export class AppHome extends React.Component{

    render(){
        return <div className="app-home">
                <h1>Appsus</h1>
                <h2>Everything you need in one place</h2>
                <div className="link-container">
                    <Link className="home-title" to="/maill"><i className="fa-solid fa-envelope"></i><span>Mail</span></Link >
                    <Link className="home-title" to="/notes"><i className="fa-solid fa-clipboard"></i><span>Notes</span></Link >
                    <Link className="home-title" to="/books"><i className="fa-solid fa-book"></i><span>Books</span></Link >
                </div> 
                </div>
    }

}