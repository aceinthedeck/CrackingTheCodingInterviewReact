import React, {Component} from 'react';
import Question from '../UI/question';
import Code from '../UI/code';

class StringCompression extends Component{

    state = {
        string:"",
        compressedString:""
    }

    ontextChange = (e) => {

        this.setState({
            string:e.target.value,
            compressedString: this.compressString(e.target.value)
        });
    }

    compressString = (text) => {

        let outputString = "";
        let tempCount=1;
        for(let i = 0; i<text.length; i++){

            if(text[i]===text[i+1]){
                tempCount++;
            }
            else{
                if(tempCount>1){
                    outputString+=text[i]+tempCount;
                    tempCount=1;
                }
                else{
                    outputString+=text[i];
                }
                
            }
            if(outputString.length>=text.length){
                return text;
            }
        }
        return outputString;
    }

    render(){
        const code=String.raw`
        compressString = (text) => {

            let outputString = "";
            let tempCount=1;
            for(let i = 0; i<text.length; i++){
    
                if(text[i]===text[i+1]){
                    tempCount++;
                }
                else{
                    if(tempCount>1){
                        outputString+=text[i]+tempCount;
                        tempCount=1;
                    }
                    else{
                        outputString+=text[i];
                    }
                    
                }
                if(outputString.length>=text.length){
                    return text;
                }
            }
            return outputString;
        }  
        `;
        return(<div>
            <Question chapter="String Compression"
            question='Implement a method to perform basic string compression using the counts of 
            repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. 
            If the "compressed" string would not become smaller than the original string, 
            your method should return the original string. 
            You can assume the string has only uppercase and lowercase letters (a - z).'/>
            <div className="form-group">
                <input className="form-control"
                onChange={this.ontextChange}
                value={this.state.string}
                placeholder="Enter string to compress"/>
            </div>
            <div className="form-group">
                <strong>Compressed string</strong>
                <p>{this.state.compressedString}</p>
            </div>
            <Code code={code}/>
        </div>);
    }
}

export default StringCompression;