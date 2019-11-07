import React from 'react';
import Container from '@material-ui/core/Container';
import {
  Box,
  Grid,
  Typography,
  AppBar,
  Button,
  Link,
  CircularProgress
} from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BackgroundImagePage from './BackgroundImagePage';
import './App.css';
import Home from './routes/index/';
import Why from './routes/why';
import WhoAreWe from './routes/who-are-we/';
import Survey from './routes/survey/';
import Nav from './Nav';
import BottomNav from './BottomNav';

function App({ classes }) {
  return (
    <Router>
      <div className="App">
        <Nav />
        <BackgroundImagePage>
          <div style={{ height: '100%' }}>
            <Route exact path="/" component={Home} />
            <Route exact path="/why" component={Why} />
            <Route exact path="/who-are-we" component={WhoAreWe} />
            <Route exact path="/survey" component={Survey} />
          </div>
        </BackgroundImagePage>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
