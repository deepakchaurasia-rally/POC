import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';
import Login from './components/Login';
import HCPSearch from './components/HCPSearch';
import { COLORS } from './utils/constants';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  button {
    background: ${COLORS.BASE_COLOR};
    color: white;
    border-style: none;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }
`;

const App = () => {
  return (
    <>
    <GlobalStyle />
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/hcp-search" exact component={HCPSearch} />
    </Router>
    </>
  );
}

export default App;