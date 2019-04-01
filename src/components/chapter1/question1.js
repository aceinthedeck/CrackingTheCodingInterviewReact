import React, { Component } from 'react';

class Question1 extends Component{

    state = {
        message: null
    }

    onTextChange =(e) => {

        var value = this.isUnique(e.target.value);

        if(value===true){
            this.setState({
                message: "String has all unique characters"
            });
        }
        else {
            this.setState({
                message: "String has duplicate characters"
            });
        }
    }

    isUnique = (text) => {

        let charSet = Array(128).fill(false);
        if(text.length>128){
            return false;
        }

        for(const char of text){
            let charCode = char.charCodeAt(0);
            if(charSet[charCode]===true){
                return false;
            }
            else{
                charSet[charCode] = true;
            }
        }
        return true;
    }

    render(){

        return(
            <div>
                <h3>Chapter 1</h3>
                <h4>Implement an algorithm to determine if a string has all unique characters. 
                    What if you cannot use additional data structures?
                </h4>
                <p>Type a string to test</p>
                <input type="text" onChange={this.onTextChange}></input>

                {
                    this.state.message && <p>{this.state.message}</p>
                }

            </div>
        )
    }
}

export default Question1;