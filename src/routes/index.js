import React from 'react'
import { Switch, BrowserRouter, Route, Link } from "react-router-dom"

import Home from '../pages/Home'


// import { Container } from './styles';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    )
}

export default Routes
