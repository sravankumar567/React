import React from 'react'

function ChildEl(props) {
  return (
    <div>
        <button onClick={props.GreetHandler}>click</button>
    </div>
  )
}

export default ChildEl