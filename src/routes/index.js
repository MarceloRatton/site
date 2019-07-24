import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from '../pages/Home'
import Teste from '../pages/Teste'


// import { Container } from './styles';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />        
                <Route path="/sobre" component={Teste} />        
                <Route path="/contato" component={Teste} />        
                <Route path="/projetos" component={Teste} />        
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
