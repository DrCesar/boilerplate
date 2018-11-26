import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/home/home';
import Counter from './components/counter/counter';

const App = () => (
  <Router>
    <div className="main-container container">
      <Route path="/" exact component={Home} />
      <Route path="/counter" component={Counter} />
    </div>
  </Router>
);

export default App;
