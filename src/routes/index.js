import React  from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Contato from '../pages/Contato'
import Projetos from '../pages/Projetos'

import Topbar from '../components/Topbar'
import Footbar from '../components/Footbar'


// import { Container } from './styles';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />        
                <Route path="/sobre" component={Sobre} />        
                <Route path="/contato" component={Contato} />        
                <Route exact path="/projetos" component={Projetos} />   
                <Route component={NoMatch} />     
            </Switch>
        </BrowserRouter>
    )
}

function NoMatch({ location }) {
    return (
        <div className="pag-404">
            <Topbar />
            <div className="error">
                <h3>
                    Não encontramos: <code>{location.pathname}</code>
                </h3>
                <div className="error-message">
                    Desculpe o link que você procura não está disponível no momento 
                </div>
            </div>
            <Footbar />
        </div>
    );
}

export default Routes
