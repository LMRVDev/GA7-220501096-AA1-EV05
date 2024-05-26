import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>SENA</h1>
      <h2>Análisis y Desarrollo de Software (2758333)</h2>
      <h3>Evidencia GA7-220501096-AA1-EV05</h3>
      <h4>Herramientas de versionamiento (GIT) instalada y configurada. </h4>
      <h5>Presentado por: Luis Miguel Rodríguez Vargas</h5>
      <h5>Instructor: Ing. Fernando Forero Gomez</h5>

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
