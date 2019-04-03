import React, {Component} from 'react';
import Question from '../UI/question';
import Code from '../UI/code';

class OneWay extends Component {

    state = {
        string1: "",
        string2: "",
        message:""
    }

    successMessage = "Two strings are one (or zero) edit away of each other";
    errorMessage = "Two strings are not one edit away of each other";

    onString1Change = (e) => {

        let string1 = e.target.value;

        this.setState({
            string1: string1
        });
        let result = this.oneWay(string1, this.state.string2);

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
        let result = this.oneWay(this.state.string1, string2);

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


    oneWay=(string1, string2) => {

        const string1Length = string1.length;
        const string2Length = string2.length;

        if(string1Length === string2Length){
           return this.oneEditReplace(string1, string2);
        }
        
        if(string1Length+1 === string2Length) {
            return this.oneEditInsert(string1, string2);
        }

        if(string1Length === string2Length+1){
            return this.oneEditInsert(string2, string1);
        }

        return false;
    }

    oneEditReplace = (string1, string2) => {
        let foundDiff= false;
        for(let i = 0; i<string1.length; i++){
            if(string1[i]!==string2[i]){
                if(foundDiff){
                    return false;
                }
                foundDiff = true;
            }
        }
        return true;
    }

    oneEditInsert = (string1, string2) => {
        let i=0;
        let j=0;
        while(i<string1.length && j<string2.length){

            if(string1[i]!==string2[j]){
                if(i!==j){
                    return false;
                }
                else{
                    j++;
                }
            }
            else {
                i++;j++;
            }
        }
        return true;
    }

    render(){

        const code = String.raw`
        oneWay=(string1, string2) => {

            const string1Length = string1.length;
            const string2Length = string2.length;
    
            if(string1Length === string2Length){
               return this.oneEditReplace(string1, string2);
            }
            
            if(string1Length+1 === string2Length) {
                return this.oneEditInsert(string1, string2);
            }
    
            if(string1Length === string2Length+1){
                return this.oneEditInsert(string2, string1);
            }
    
            return false;
        }
    
        oneEditReplace = (string1, string2) => {
            let foundDiff= false;
            for(let i = 0; i<string1.length; i++){
                if(string1[i]!==string2[i]){
                    if(foundDiff){
                        return false;
                    }
                    foundDiff = true;
                }
            }
            return true;
        }
    
        oneEditInsert = (string1, string2) => {
            let i=0;
            let j=0;
            while(i<string1.length && j<string2.length){
    
                if(string1[i]!==string2[j]){
                    if(i!==j){
                        return false;
                    }
                    else{
                        j++;
                    }
                }
                else {
                    i++;j++;
                }
            }
            return true;
        }
        `;

        return(
            <div>

                <Question chapter="One Way"
                    question="There are three types of edits that can be performed on the strings: 
                    insert a character, remove a character, or replace a character. 
                    Given two strings, write a function to check if they are one edit (or zero edits) away.
                    "/>
                    
                <p>Example</p>
                <p>pale, ple -> true</p>
                <p>pales, pale -> true</p>
                <p>pale, bake -> false</p>
                {
                    this.state.message && 
                    <div className="alert alert-primary">
                        {this.state.message}
                    </div>
                }
                <div className="form-group">
                <input className="form-control" 
                    type="text" placeholder="Enter String1"
                    value={this.state.string1}
                    onChange={this.onString1Change}
                ></input>
                </div>
                <div className="form-group">
                <input className="form-control" 
                    type="text" placeholder="Enter String2"
                    value={this.state.string2}
                    onChange={this.onString2Change}
                  ></input>
                </div>
                <Code code={code}/>
            </div>
        );
    }

}

export default OneWay;