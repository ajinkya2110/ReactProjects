import { useState } from 'react'
import './App.css'
import StartGame from './Components/StartGame'
import Gameplay from './Components/Gameplay';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }

  return (
    <>
      {
        isGameStarted ? <Gameplay /> : <StartGame
          toggle={toggleGamePlay} />
      }

    </>
  )
}

export default App
