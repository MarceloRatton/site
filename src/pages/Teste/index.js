import React, { Component } from 'react'

// import { Container } from './styles';
import Topbar from '../../components/Topbar'
import Footbar from '../../components/Footbar'

export default class Teste extends Component {
  render() {
    return (
        <div>
            <h1>Teste</h1>
            <Topbar />
            <Footbar />
        </div>
    )
  }
}
