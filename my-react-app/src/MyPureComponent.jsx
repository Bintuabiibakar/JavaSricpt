import React,{ PureComponent } from "react";
class MyPureComponent extends PureComponent{
    render(){
        console.log("Rending MyPureComponent");
        return<div>{this.props.name}</div>
    }
}
export default MyPureComponent