import React from "react";
class FavoriteColor extends React.Component{
    constructor(){
        super();
        this.state = {color:"Red", model:"Logan"};
    }
    render(){
        return(
        <>
        <h1>This is {this.state.color} color and model is {this.state.model}.</h1>
        <button onClick={()=>{this.setState((previousState)=> {return {...previousState,color:"Green"}})}}>Change Color</button>
        </>
        )
    }
}
export default FavoriteColor;