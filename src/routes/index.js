import React from 'react'
import { Switch, Route } from "react-router"

import Home from '../pages/Home'


// import { Container } from './styles';

const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
        </div>
    )
}

export default Routes
