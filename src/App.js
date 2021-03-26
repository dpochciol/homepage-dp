import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
} from "react-router-dom";

import Head from './components/Head';
import Main from './components/Main';
import Details from './components/Details';
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
        <Head />
        <Main />
        <Details />
        <Footer />
    </Router>
  )
}

export default App
