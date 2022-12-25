import React, { Component } from 'react'

 class Binging extends  React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Method:"hello"
      }

      this.ChangeEvent=this.ChangeEvent.bind(this)

    }
  
    ChangeEvent=()=>{
        this.setState({
            Method:"good Bye!"
        })




    }














  render() {
    return (
      <div>
        <p1>{this.state.Method}</p1>
        <button onClick={this.ChangeEvent}>click me</button>
      </div>
    )
  }
}

export default Binging