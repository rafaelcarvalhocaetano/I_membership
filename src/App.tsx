import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './app.scss';

import Routers from './router/Route';
import Header from './components/header/header';
import Modal from './components/modal/Modal';
import UserProvider from './context/UseContext';
import Overview from './pages/overview';
import Cloud from './pages/clould';

const App = () => {

  const [model, setModel] = useState<boolean>();
  
  const dataModal = (data: boolean) => setModel(data);

  return (
    <UserProvider>
      <div className="container-router">
        <Router>
          <div className="navbar">
            <Routers />
          </div>
          <div className="router-pages">
            <Header toggle={dataModal} />
            <Switch>
              <Route path='/' exact component={Overview} />
              <Route path='/cloud' component={Cloud} />
            </Switch>
          </div>
        </Router>
        {
          model ? <Modal toggle={dataModal} /> : null 
        }
      </div>
    </UserProvider>
  );

}

export default App;
