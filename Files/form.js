import React from "react";

export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={value:''}
        this.handleClick=this.handleClick.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleClick(event){
            alert('Welcome'+this.state.value);
            event.preventDefault();
    }
    handleChange(event){
        this.setState({
            value:event.target.value
        })
    }
    render(){
        return(
          
            <form onSubmit={this.handleClick}>
                <label for='name'>
                    <input type='text' id='name' value={this.state.value} onChange={this.handleChange}></input>
                    Name:
                </label>
                <input type='submit'></input>
            </form>
           
            );
    }
}