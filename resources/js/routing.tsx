import React, { Component } from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
// import ErrorPage from './pages/error'
// import PortfolioPage from './pages/portfolio'
import Register from './pages/register'


class Routing extends Component {
    // static contextType = UserContext
    render(){
        // const isLogged = this.context.loggedIn
        return (
            <BrowserRouter>
                <Switch>
                    {/* <Route path='/' exact component={PortfolioPage}/> */}
                    <Route path='/register' component={Register}/>
                    {/* <Route component={ErrorPage}/> */}
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routing