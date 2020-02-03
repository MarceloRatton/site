import React, { Component } from 'react';

import Topbar from '../../components/Topbar'
import Footbar from '../../components/Footbar'

// import { Container } from './styles';

export default class Contato extends Component {
  render() {
    return (
        <div>
            <h2>Contato</h2>
            <Topbar />
            <Footbar />
        </div>
    )
  }
}
