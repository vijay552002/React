import React from "react";

export default class Composition extends React.Component{
    constructor(props){
        super(props);
        this.state={value:''}
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(e){
        alert('Welcome'+this.state.value);
        e.preventDefault();
    }
    handleChange(e){
        this.setState({
            value:e.target.value
        })
    }
    render(){
        return(
            <Dialog message="Welcome">
                <input type="text" onChange={this.handleChange}></input>
                <button onClick={this.handleClick}>Submit</button>
            </Dialog>
        );
    }
}
function Dialog(props){
   return(
   <div>{props.children}</div>);
        
}
// function Toggle(props){
//      alert('Hii'+props.display);
//     // {props.children}
// }