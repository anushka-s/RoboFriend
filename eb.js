import React, { Component } from 'react';

class EB extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            hasError:false
        }
    }
    componentDidCatch(error,info){
        this.setState({ hasError:true})
    }
    render(){
        if(this.state.hasError){
            return <h1>OOPS! An error has occurred.</h1>
        }
        return this.props.children
    }
}
export default EB;
