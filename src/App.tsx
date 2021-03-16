import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Statistics from 'views/Statistics';
import Money from 'views/Money';
import NoMatch from 'views/NoMatch';
import Tags from 'views/Tags';
import styled from 'styled-components';
import {Tag} from 'Tag';

const AppWrapper = styled.div`
  color: #333;
`;

export default function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route exact path="/tags" >
            <Tags/>
          </Route>
          <Route exact path="/tags/:id" >
            <Tag/>
          </Route>
          <Route exact path="/money" >
            <Money/>
          </Route>
          <Route exact path="/statistics" >
            <Statistics/>
          </Route>
          <Redirect exact from="/" to="/money"/>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}





















