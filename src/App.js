import React,{Fragment} from 'react';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';

function App() {
  return (
    <Fragment>
      <Header/>
      <Intro/>
      <About/>
      <Works/>
      <Contact/>
    </Fragment>
  );
}

export default App;
