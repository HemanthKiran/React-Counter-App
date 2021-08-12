import React, { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>Counter app Using state/hooks</h1>
      </header>
      <h2>count value is :{count}</h2>
      <button onClick={() => setCount(0)}>Reset value</button>
      <button onClick={() => (count >= 10 ? "" : setCount(count + 1))}>increase value</button>
      <button onClick={() => (count <= 0 ? "" : setCount(count - 1))}>decrease value</button>
    </div>
  )
}
export default App;