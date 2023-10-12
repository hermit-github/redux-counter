import './App.css'
import { useSelector,useDispatch } from 'react-redux'

function App() {
  const counter = useSelector((state) => state.counter);
  const counter2 = useSelector((state) => state.counter2);
  const dispatch = useDispatch()

  const increment = () => {
    dispatch({type:"increment"})
  }

  const decrement = () => {
    dispatch({type:"decrement"})
  }

  const increment2 = () => {
    dispatch({type:"increment2"})
  }

  const decrement2 = () => {
    dispatch({type:"decrement2"})
  }

  return (
    <>
      <div>
        <h1>Counter App</h1>
        <div style={{display:"flex",gap:"1rem",height:"3rem",alignItems:"center",justifyContent:"center"}}>
          <button onClick={increment}>Increment</button>
          <h1>{counter}</h1>
          <button onClick={decrement}>Decrement</button>
        </div>
        <div style={{display:"flex",gap:"1rem",height:"3rem",alignItems:"center",justifyContent:"center"}}>
          <button onClick={increment2}>Increment</button>
          <h1>{counter2}</h1>
          <button onClick={decrement2}>Decrement</button>
        </div>
      </div>
    </>
  )
}

export default App
