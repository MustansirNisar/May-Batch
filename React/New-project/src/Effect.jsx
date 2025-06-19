import React, { useEffect } from 'react'

function Effect({count, data}) {

        useEffect(()=>{
            console.log("Mounting once");
            
        },[])

        useEffect(()=>{
            console.log("update on count");
            
        },[count])

        useEffect(()=>{
            return ()=>{
                console.log("cleanup before mount")
            }
        },[])

  return (
    <div>
      

      <h1>counter Value: {count}</h1>
      <h1>Data Value: {data}</h1>
    </div>
  )
}

export default Effect
