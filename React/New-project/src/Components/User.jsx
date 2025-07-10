import React from 'react'
import Greet from './Greet'

function User({name = "User"}) {
  return (
    <div>
      <h1>Hello: {name}</h1>
     
    </div>
  )
}

export default User
