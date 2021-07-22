import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { Post } from './pages/Post';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/post:id">
          <Post />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
