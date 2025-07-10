import React from 'react'

function Wrapper({children, color = "red"}) {

    let newStyle = {
        color: "red",
        backgroundColor: "aquamarine",
        border: "3px solid black",
        width: "300px",
        margin: "20px"
    }



  return (
    <div style={newStyle}>
      

    {children}

    </div>
  )
}

export default Wrapper
