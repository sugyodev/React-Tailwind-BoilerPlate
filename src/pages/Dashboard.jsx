import { decrement, increment } from '../store/slices/counterSlice'
import { useSelector, useDispatch } from 'react-redux'

function Dashboard() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <header className="App-header">
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <div className='text-green-500'>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </header>
  )
}

export default Dashboard