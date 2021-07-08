import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, addTodo, removeLastTodo } from './toolkitRedux/toolkitSlice';

function App() {

  const count = useSelector(state => state.toolkit.count)
  const todos = useSelector(state => state.toolkit.todos)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(addTodo(prompt()))}>add todo</button>
      <button onClick={() => dispatch(removeLastTodo())}>remove last todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
