import React, { useContext } from 'react'
import { courseContext } from './DataContext'

function Course() {
    let course = useContext(courseContext)
  return (
    <div style={{backgroundColor: "green", border: "2px solid black", padding: "10PX"}}>
      <h1>Course Component</h1>
      <h2>Course: {course}</h2>
    </div>
  )
}

export default Course
