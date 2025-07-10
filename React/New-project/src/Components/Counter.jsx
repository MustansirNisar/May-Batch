import React, { useState } from 'react'

function Counter() {
    let[count, setCount] = useState(0)
    // let update = ()=>{
    //     setCount(++count)
    // }

      let[Dec, setDec] = useState(100)

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>{setCount(++count)}}>Update Counter</button>
      <hr />
      <h1>Dec Counter: {Dec}</h1>
      <button onClick={()=>{setDec(--Dec)}}>Decrement</button>
    </div>
  )
}

export default Counter
