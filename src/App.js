import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Question1 from './components/chapter1/question1';
import Header from './components/UI/header';
import SideBar from './components/UI/sidebar';
import CheckPermutation from './components/chapter1/checkPermutation';
import URLify from './components/chapter1/urlify';
import PalindromePermutation from './components/chapter1/palindromePermutation';
import OneWay from './components/chapter1/oneWay';
import StringCompression from './components/chapter1/stringCompression';
import RotateMatrix from './components/chapter1/rotateMatrix';

class App extends Component {

  render() {
    return (
      <Router>
      <div>
        <Header/>
        <div className="container-fluid">
          <div className="row">
            <SideBar/>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="container">
              <Route path="/" exact component={CheckPermutation} />
              <Route path="/isunique/" component={Question1}/>
              <Route path="/checkpermutation/" component={CheckPermutation} />
              <Route path="/urlify" component={URLify}/>
              <Route path="/palindromepermutation" component={PalindromePermutation}/>
              <Route path="/oneway" component={OneWay}/>
              <Route path="/stringcompression" component={StringCompression}/>
              <Route path="/rotatematrix" component={RotateMatrix}/>
              </div>
            </main>
          </div>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
