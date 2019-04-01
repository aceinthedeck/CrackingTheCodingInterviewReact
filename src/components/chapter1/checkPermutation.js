import React, { Component } from 'react';
import Question from '../UI/question';

class CheckPermutation extends Component {

    render(){

        return(
            <div>
                <Question chapter="Chapter 1"
                 question="Given two strings, write a method to decide if one is a permutation of the other"
                />
                 <input type="text" 
                placeholder="Type a string to test"
                className="form-control"
                 onChange={this.onTextChange}></input>
                  <input type="text" 
                placeholder="Type a string to test"
                className="form-control"
                 onChange={this.onTextChange}></input>
            </div>);
    }
}

export default CheckPermutation;