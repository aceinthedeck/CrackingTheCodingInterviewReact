import React, { Component } from 'react';
import Question from '../UI/question';
import Code from '../UI/code';

class CheckPermutation extends Component {

    state = {
        string1: "",
        string2: "",
        message:""
    }

    successMessage = "Two strings are permutation of each other";
    errorMessage = "Two strings are not permutations of each other";

    onString1Change = (e) => {

        let string1 = e.target.value;

        this.setState({
            string1: string1
        });
        let result = this.checkPermutation(string1, this.state.string2);

        if(result === true){
            this.setState({
                message: this.successMessage
            })
        }
        else {
            this.setState({
                message: this.errorMessage
            })
        }

    }

    onString2Change = (e) => {

        let string2 = e.target.value;

        this.setState({
            string2: string2
        });
        let result = this.checkPermutation(this.state.string1, string2);

        if(result === true){
            this.setState({
                message: this.successMessage
            })
        }
        else {
            this.setState({
                message: this.errorMessage
            })
        }

    }

    checkPermutation = (string1, string2) => {

        let charCount = Array(128).fill(0);
        
        if(string1.length !== string2.length)
        {
            return false;
        }

        for(const char of string1){
            let charCode = char.charCodeAt(0);
            charCount[charCode] +=1;
        }

        for(const char of string2) {
            let charCode = char.charCodeAt(0);
            charCount[charCode] -=1;
            if(charCount[charCode]<0){
                return false;
            }
        }

        return true;
    }

    render(){

        const code = String.raw`
        checkPermutation = (string1, string2) => {

            let charCount = Array(128).fill(0);
            
            if(string1.length !== string2.length)
            {
                return false;
            }
    
            for(const char of string1){
                let charCode = char.charCodeAt(0);
                charCount[charCode] +=1;
            }
    
            for(const char of string2) {
                let charCode = char.charCodeAt(0);
                charCount[charCode] -=1;
                if(charCount[charCode]<0){
                    return false;
                }
            }
    
            return true;
        }
        `;

        return(
            <div>
                <Question chapter="Chapter 1 - Check Permutation"
                 question="Given two strings, write a method to decide if one is a permutation of the other"
                />
                {
                    this.state.message && 
                    <div className="alert alert-primary">
                        {this.state.message}
                    </div>
                }
                 <div class="form-group">
                 <input type="text" placeholder="Type a string to test"
                        className="form-control"
                        value={this.state.string1}
                        onChange={this.onString1Change}></input>
                 </div>
                 <div class="form-group">
                  <input type="text" placeholder="Type a string to test"
                        className="form-control"
                        value={this.state.string2}
                        onChange={this.onString2Change}></input>
                 </div>
                 <Code code={code}/>
            </div>);
    }
}

export default CheckPermutation;