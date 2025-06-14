import { useReducer } from "react"
import Counterrr from "./Counterrr"
import { useDispatch, useSelector } from "react-redux"
import { bColor } from "./ReduxStore/Action"
import { increment, decrement } from "./ReduxToolkit.jsx/CounterSlice"
import { setUser, updateAge } from "./ReduxToolkit.jsx/UserSlice"

function App() {

  let count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  let user = useSelector((state)=>state.user)
  return (

      <div  >
       <h1>Count: {count}</h1>
       <button onClick={()=>dispatch(increment())}>Increment</button>
       <button onClick={()=>dispatch(decrement())}>Decrement</button>

       <br />
       <h1>Name: {user.name}</h1>
       <h1>Age: {user.age}</h1>
       <button onClick={()=>dispatch(setUser({name: "Safal", age: 20}))}>Set User</button>
       <button onClick={()=>dispatch(updateAge({age: 65}))}>Set Age</button>
      </div>
  )
}

export default App



