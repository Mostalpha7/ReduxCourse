import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions'

function App () {
  const counter = useSelector(state => state.counterReducer)
  const isLogged = useSelector(state => state.loggedReducer)
  const dispatch = useDispatch()

  return (
    <div className='App'>
      Counter {counter}
      <div>
        <button onClick={() => dispatch(increment(4))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      {isLogged ? (
        <h3>Show only authenticated user(s)</h3>
      ) : (
        <p>Only for authenticated user(s)</p>
      )}
    </div>
  )
}

export default App
