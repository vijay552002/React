import React from "react";

export default class Text extends React.Component{
    constructor(props){
        super(props);
        this.state={value:"Please enter the story"};
        this.handleClick=this.handleClick.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleClick(event){
        alert('Your Story'+this.state.value);
        event.preventDefault();
    }
    handleChange(event){
        this.setState({
            value:event.target.value
        })
    }
    render(){
        return(
          <form onClick={this.handleChange}>
            <textarea value={this.state.value} onChange={this.handleChange}></textarea>
            <input type='submit'></input>
          </form>
        );
    }
}