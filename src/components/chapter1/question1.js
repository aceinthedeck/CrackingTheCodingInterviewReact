import React, { Component } from 'react';
import Question from '../UI/question';
import Code from '../UI/code';

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

        const code = String.raw`
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
            }`;

        return(
            <div>
                <Question chapter="Chapter 1 - Is Unique"
                question="Implement an algorithm to determine if a string has all unique characters. 
                What if you cannot use additional data structures?"/> 
                <div class="form-group">
                <input type="text" placeholder="Type a string to test"
                className="form-control"
                 onChange={this.onTextChange}></input>
                 </div>

                {
                    this.state.message && 
                    <div className="alert alert-primary">
                        {this.state.message}
                    </div>
                }
                <Code code={code}/>

            </div>
        )
    }
}

export default Question1;