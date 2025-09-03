import { Component } from "react";
class Apple extends Component{
    render(){
        const {appleInfo} = this.props;
        const {type,color} = appleInfo;
        return(
            <h2>Im {color} {type} Apple</h2>
        )
    }
}
export default Apple;