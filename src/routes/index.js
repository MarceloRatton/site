import React  from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Contato from '../pages/Contato'
import Projetos from '../pages/Projetos'
// import Teste from '../pages/Teste'


// import { Container } from './styles';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />        
                <Route path="/sobre" component={Sobre} />        
                <Route path="/contato" component={Contato} />        
                <Route exact path="/projetos" component={Projetos} />        
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
