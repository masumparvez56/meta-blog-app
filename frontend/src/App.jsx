import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ThemeContext } from './context/ThemeContext'
import { useState } from 'react'

function App() {
  const [darkmode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={{darkmode, setDarkMode}}>
        <Navbar />
        <main className='min-h-screen'>
          <Outlet />
        </main>
        <Footer />
      </ThemeContext.Provider>

    </>
  )
}

export default App
