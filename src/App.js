import React, { Component } from 'react';
import JumbotronComponents from './components/JumbotronComponents';
import NavBarComponents from './components/NavBarComponents';

import { BrowserRouter, Route } from 'react-router-dom';
import HomeContainer from './container/HomeContainer';
import CreateUserContainer from './container/CreateUserContainer';
import DetailUserContainer from './container/DetailUserContainer';
import EditContainer from './container/EditContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBarComponents />
        <JumbotronComponents />
        <BrowserRouter>
          <Route path='/' exact component={HomeContainer} />
          <Route path='/create' exact component={CreateUserContainer} />
          <Route path='/detail/:id' exact component={DetailUserContainer} />
          <Route path='/edit/:id' exact component={EditContainer} />
        </BrowserRouter>
      </div>
    );
  }
}
