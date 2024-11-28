import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';
import BlogDetails from './components/BlogDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={BlogList} />
        <Route path="/new" component={BlogForm} />
        <Route path="/post/:id" component={BlogDetails} />
      </Switch>
    </Router>
  );
}

export default App;
 