import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return <h1>
    Render qilindi {count}
  </h1>
}

export default App;
