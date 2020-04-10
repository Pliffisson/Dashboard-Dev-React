import React, { Component } from "react";

export default class MenuSuperior extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-1g navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          DevMedia
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto"></ul>
        </div>
      </nav>
    );
  }
}
