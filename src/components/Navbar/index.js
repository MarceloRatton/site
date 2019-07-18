import React, { Component } from 'react';

// import { Container } from './styles';

export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-default" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span class="sr-only">Toggle nav</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>

        <a class="navbar-brand" href="index.html">MarceloRatton.com</a>

          </div>
          <div class="navigation collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav">
              <li class="current"><a href="#intro">Home</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#services">Lazer</a></li>
              <li><a href="#portfolio">Trabalhos</a></li>
              <li><a href="#team">Projetos</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
