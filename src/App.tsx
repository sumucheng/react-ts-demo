import React from 'react';
import styled from 'styled-components'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Item from 'views/Item';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/item">
            <Item />
          </Route>
          <Redirect exact from='/' to='/item'></Redirect>
          <Route path="*">
            404
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
