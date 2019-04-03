import React, { Component } from 'react';
import Question from '../UI/question';
import Code from '../UI/code';


class URLify extends Component {

    state ={
        output:""
    }

    onTextChange = (e) => {

        this.setState({
            output: this.urlify(e.target.value)
        })

    }

    urlify = (text) => {
        
        let output="";
        text = text.trimEnd();
        for(const c of text){

            if(c===" "){
                output+='%20';
            }
            else{
                output+=c;
            }
        }
        return output;
    }

    render(){

        const code = String.raw`
        urlify = (text) => {
        
            let output="";
            text = text.trimEnd();
            for(const c of text){
    
                if(c===" "){
                    output+='%20';
                }
                else{
                    output+=c;
                }
            }
            return output;
        }
        `;
        return(
            <div>
                <Question chapter="Chapter 1 - URLify"
                 question="Write a method to replace all spaces in a string with %20 You may assume that the string
                 has sufficient space at the end to hold the additional characters, and that you are given the true
                length of the string."
                />
                <input className="form-control" 
                type="text" placeholder="Enter text with spaces"
                onChange={this.onTextChange}
                ></input>
                <div>
                    <strong>Output</strong>
                    <p>{this.state.output && this.state.output}</p>
                </div>
                <Code code={code} />
            </div>
        );
    }

}

export default URLify;