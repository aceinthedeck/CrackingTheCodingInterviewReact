import React, {Component} from 'react';
import Question from '../UI/question';
import Code from '../UI/code';

class RotateMatrix extends Component{

    state={
        imageArray: [[1,2,3],[4,5,6],[7,8,9]]
    }
    

    onAntiClockWiseClick = (e) => {
        this.setState({
            imageArray: this.rotateAntiClockWise(this.state.imageArray)
        })
    }

    onClockWiseClick = (e) => {
        this.setState({
            imageArray: this.rotateClockWise(this.state.imageArray)
        })
    }

    rotateAntiClockWise = (array) => {

        const rows =array.length;
        const col  = rows;
        let newArray = [];
        for(let i=0;i<rows;i++){
            newArray[i]=[]
        }

        for(let i = 0; i<rows;i++){
            for(let j=0; j<col;j++){
                newArray[rows-1-j][i] = array[i][j];
            }
        }
        return newArray
    }

    rotateClockWise = (array) => {

        const rows =array.length;
        const col  = rows;
        let newArray = [];
        for(let i=0;i<rows;i++){
            newArray[i]=[]
        }

        for(let i = 0; i<rows;i++){
            for(let j=0; j<col;j++){
                newArray[j][rows-1-i] = array[i][j];
            }
        }
        return newArray

    }

    render(){

        const code = String.raw`
        rotateAntiClockWise = (array) => {

            const rows =array.length;
            const col  = rows;
            let newArray = [];
            for(let i=0;i<rows;i++){
                newArray[i]=[]
            }
    
            for(let i = 0; i<rows;i++){
                for(let j=0; j<col;j++){
                    newArray[rows-1-j][i] = array[i][j];
                }
            }
            return newArray
        }
    
        rotateClockWise = (array) => {
    
            const rows =array.length;
            const col  = rows;
            let newArray = [];
            for(let i=0;i<rows;i++){
                newArray[i]=[]
            }
    
            for(let i = 0; i<rows;i++){
                for(let j=0; j<col;j++){
                    newArray[j][rows-1-i] = array[i][j];
                }
            }
            return newArray
    
        }
        
        `;

        return(<div>
            <Question chapter="Rotate Matrix"
            question="Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?"
            />
            <p>Image Array</p>
            <table className="table table-bordered">
                <tbody>
            {
                this.state.imageArray.map((row,index)=>{

                    return (
                        <tr key={index}>
                    {row.map((cell, index)=>{

                        return(<td key={index}>{cell}</td>);

                    })}
                    </tr>
                    )
                })
            }
            </tbody>
            </table>
            <div className="form-group">
                <button className="btn btn-primary" onClick={this.onClockWiseClick}>Rotate Clockwise</button>
                <button className="btn btn-primary" onClick={this.onAntiClockWiseClick}>Rotate Anti-Clockwise</button>
            </div>
            <Code code={code}/>
        </div>);
    }
}

export default RotateMatrix;

