import React from 'react'

 function FunctionClick() {
    function ChangeMessage(){
        console.log("button clicked");
    }



  return (
    <button onClick={ChangeMessage}>click</button>
  )
}

export default FunctionClick