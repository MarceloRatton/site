import React, { Component } from 'react';

import './styles.css'

export default class Title extends Component {
  render() {
    return (
      <div className="site-heading">
        <h1>
            <span className="header-title">Desenvolvimento de soluções Web</span>
        </h1>
        <h3>
          <span className="header-subtitle">MarceloRatton.com</span>
        </h3>
      </div>
    )
  }
}
