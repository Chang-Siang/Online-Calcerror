import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Calculator from './Calculator'
import Ranking from './Ranking'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'glyphicons-only-bootstrap/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div className="app">
      <div className="main">
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={Calculator} />
            <Route path="/ranking" component={Ranking} />
          </Switch>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default App;
