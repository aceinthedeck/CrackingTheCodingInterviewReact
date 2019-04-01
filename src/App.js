import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Question1 from './components/chapter1/question1';
import Header from './components/UI/header';
import SideBar from './components/UI/sidebar';
import CheckPermutation from './components/chapter1/checkPermutation';

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
              <Route path="/" exact component={CheckPermutation} />
              <Route path="/isunique/" component={Question1}/>
              <Route path="/checkpermutation/" component={CheckPermutation} />
            </main>
          </div>
        </div>
        
      </div>
      </Router>
    );
  }
}

export default App;
