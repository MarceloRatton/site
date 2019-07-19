import React, { Component } from 'react';

import './styles.css'

export default class Title extends Component {
  render() {
    return (
        <h1 className="site-heading">
            <span className="header-title">Desenvolvimento de soluções Web</span><br />
            <span className="header-subtitle">MarceloRatton.com</span>
        </h1>
    )
  }
}
