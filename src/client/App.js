import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles/sass/app.scss";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Contact from "./components/Contact";
import Divider from "./components/Divider";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Header} />
            <Route exact path="/" component={Layout}/>
            <Route exact path="/contact" component={Contact}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
