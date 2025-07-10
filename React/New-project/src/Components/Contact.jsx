import React from 'react'
import Social from './Social'

export default function Contact({firstName, name2, age}) {
  return (
    <>
    <h1> This is the contact section</h1>

      <h2>This is the first name: {firstName}</h2>
      <h3>This is the name2: {name2}</h3>
      <h4>This is the age: {age}</h4>
      <hr />
      <Social fName = {firstName} sName = {name2} age = {age}/>
    </>
  )
}




