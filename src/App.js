import React, { Component } from 'react';
import JumbotronComponents from './components/JumbotronComponents';
import NavBarComponents from './components/NavBarComponents';

import { BrowserRouter, Route } from 'react-router-dom';
import HomeContainer from './container/HomeContainer';
import CreateUserContainer from './container/CreateUserContainer';
import DetailUserContainer from './container/DetailUserContainer';
import EditContainer from './container/EditContainer';

export default class App extends Component {
  state = {
    title: 'Generasi Terburuk List',
    users: [
      {
        id: 1,
        nama: 'dimas',
        alamat: 'Sumbawa',
        umur: '19',
        nohp: '0210974029492',
      },
      {
        id: 2,
        nama: 'nova',
        alamat: 'Sumbawa',
        umur: '19',
        nohp: '0210974029492',
      },
      {
        id: 3,
        nama: 'amelia',
        alamat: 'Sumbawa',
        umur: '19',
        nohp: '0210974029492',
      },
    ],
  };
  render() {
    return (
      <div>
        <NavBarComponents />
        <JumbotronComponents title={this.state.title} />
        <BrowserRouter>
          <Route path='/' exact>
            <HomeContainer users={this.state.users} />
          </Route>
          <Route path='/create' exact>
            <CreateUserContainer />
          </Route>

          <Route path='/detail/:id' exact>
            <DetailUserContainer />
          </Route>
          <Route path='/edit/:id' exact>
            <EditContainer />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}
