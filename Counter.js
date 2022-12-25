import React, { Component } from 'react'

 class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state={
            Message:0
        }
    }


 changeMessage(){
   this.setState({
    Message : this.state.Message+1
   })
   console.log(this.state.Message)
       

 }









  render() {
    return (
        
      <div>
        <h1>counter-{this.state.Message}</h1>

        <button onClick={()=> this.changeMessage()}>increase</button>
        
        
      </div>
    )
  }
}

export default Counter