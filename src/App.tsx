import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './app.scss';

import Routers from './router/Route';
import Overview from './pages/Overview';
import Cloud from './pages/Cloud';
import Header from './components/header/header';
import Modal from './components/modal/Modal';

const App = () => {

  const [model, setModel] = useState<boolean>();
  
  const dataModal = (data: boolean) => {
    setModel(data);
  }

  return (
    <div className="container-router">
      <Router>
        <Routers />
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
  );
}

export default App;
