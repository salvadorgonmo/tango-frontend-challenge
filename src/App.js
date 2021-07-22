import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { Home } from './pages/Home';
import { Post } from './pages/Post';
import store from './app/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/post/:id" exact>
            <Post />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
