import React, { Component } from 'react'
import ChildEl from './ChildEl'

 class ParentEl extends  React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
         Message:"parent"
      }
      this.Combined=this.Combined.bind(this)
    }

    Combined(){
         alert(`hi ${this.state.Message}`)
       
    }







  render() {
    return (
      <ChildEl GreetHandler={this.Combined}  />
        

      
    )
  }
}

export default ParentEl