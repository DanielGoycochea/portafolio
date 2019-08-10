import React,{Fragment} from 'react';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About'

function App() {
  return (
    <Fragment>
      <Header/>
      <Intro/>
      <About/>
       
      
    </Fragment>
  );
}

export default App;
