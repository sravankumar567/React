
import React, { Component } from 'react'

 class ClassClick extends React.Component {



  Callclick() {
    console.log("class also compiles")
        
    }



  render() {
    return (
      <div>
        <button onClick={this.Callclick}>subscribe</button>
      </div>
    )
  }
}

export default ClassClick