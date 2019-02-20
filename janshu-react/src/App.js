import React, { Component } from 'react';
import Header from "./components/header";
import store from './store';
import Home from './components/pages/home';
import Detail from './components/pages/detail';
import Login from './components/pages/login';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header /> 
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/detail/:id" exact component={Detail} />
            </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
