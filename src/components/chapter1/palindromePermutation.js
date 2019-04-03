import React, { Component } from 'react';
import Question from '../UI/question';
import Code from '../UI/code';


class PalindromePermutation extends Component{

    state = {
        message:""
    }

    onTextChange = (e) => {

        let result = this.palindromePermutation(e.target.value.toLowerCase());

        if(result){
            this.setState({
                message:"String is a palindrome"
            });
        }
        else{
            this.setState({
                message:"String is not a palindrome"
            });
        }
    }

    palindromePermutation = (text) => {

        let charMap = {};

        for(const c of text){

            if(!charMap[c]){
                charMap[c] = 1
            }
            else{
                charMap[c]++;
            }
        }
        let checkOdd = false;

        for(let key in charMap){
            
            if(charMap[key]%2===1){
                if(checkOdd){
                    return false;
                }
                checkOdd = true;
            }
        }
        return true;
    }

    render(){

        const code = String.raw`
        palindromePermutation = (text) => {

            let charMap = {};
    
            for(const c of text){
    
                if(!charMap[c]){
                    charMap[c] = 1
                }
                else{
                    charMap[c]++;
                }
            }
            let checkOdd = false;
    
            for(let key in charMap){
                
                if(charMap[key]%2===1){
                    if(checkOdd){
                        return false;
                    }
                    checkOdd = true;
                }
            }
            return true;
        }
        `;

        return(<div>
            <Question chapter="Palindrome Permutation"
            question="Given a string, write a function to check if a permutation is a palindrome.
            A palindrome is a word or phrase that is same forwards and backwards. A permutation is a rerragnement
             of letters. The palindrome does not to be limited to just dictionary words.
            "/>
            {
                    this.state.message && 
                    <div className="alert alert-primary">
                        {this.state.message}
                    </div>
            }
            <input className="form-control" 
                type="text" placeholder="Enter text"
                onChange={this.onTextChange}
            ></input>

            <Code code={code}/>



        </div>)
    }

}

export default PalindromePermutation;