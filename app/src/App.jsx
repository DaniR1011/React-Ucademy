import { NavLink, Outlet} from 'react-router-dom'
import React from 'react'

function App() {


  return (
    <div className="App">
      {/* <nav className='nav'>
        <div className='logo'>
          <img src="https://ucademy.com/wp-content/uploads/2022/08/Diseno-sin-titulo-28-1.png" />
          <input type='text' placeholder="Buscar..." ></input>
        </div>
        <div className='buttons'>
        <button>📧</button>
        <button>🔔</button>
        <button>👤</button>
        </div>
      </nav> */}
      <main>
        <Outlet />
      </main>
      
    </div>
  )
}

export default App
