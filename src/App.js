import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Page1 from './components/page1';
import Home from './components/Home';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: {},
      error: null,
    };

  }

  componentDidMount() {
    this.makeRemoteRequest();
  }
  
  makeRemoteRequest = () => {
    fetch('https://countries-274616.ew.r.appspot.com/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ query: 'query { Country { name flag { svgFile }} }'}),
    })
    .then(res => res.json())
    .then(res => {
      console.log('res: ', res.data);
      this.setState({
        data: res.data,
        error: res.error || null,
        loading: false,
      });
    })
    .catch(error => {
      this.setState({ error, loading: false });
    });

  };
  
  render(){

    return (
      
      <Router>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
          <div class="d-flex">
            <div class="p-2">
              <a class="navbar-brand">FindaFlag.com</a>
            </div>
            <div class="p-2">
              <Link 
                to="/"
                class="nav-link"
              >
                Home
              </Link>
            </div>
            <div class="p-2">
              <Link 
                to="/page1"
                class="nav-link"
                >
                  Flag Finder
                </Link>
            </div>
          </div>
        </nav>
      <div>

        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/page1">
            <Page1 
              data={this.state.data}
            />
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }
  
}
