import React, { Component } from 'react';
import './App.css';
import Question1 from './components/chapter1/question1';
import Header from './components/UI/header';
import SideBar from './components/UI/sidebar';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container-fluid">
          <div className="row">
            <SideBar/>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <Question1/>
            </main>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
