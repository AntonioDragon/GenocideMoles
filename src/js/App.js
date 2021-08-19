import 'normalize.css'
import '../scss/style.scss'

import React, {useCallback, useState} from 'react'
import ReactDOM from 'react-dom'
import StatusBar from './Components/StatusBar'
import InterfaceGame from './Components/InterfaceGame'
import ContextApp from './Context/ContextApp'


const App = () => {
  const [arrMole, setStateArrMole] = useState('missing')
  const [hitsMiss, setHitsMiss] = useState(0)
  const [catchesMole, setCatchesMole] = useState(95)

  const startGame = useCallback(
      () => {
        const arr = [];
        for (let i = 0; i < 6; i++) {
          arr.push([i, 0])
        }
        setStateArrMole(arr)
      },
      [setStateArrMole],
  )

  return (
    <ContextApp.Provider
      value={{hitsMiss, catchesMole, setHitsMiss,
        setCatchesMole, setStateArrMole, arrMole}}>
      <h1 className='title'>Genocide of Moles</h1>
      {
        arrMole != 'missing' ?
        <div className ='interface-game'>
          <InterfaceGame/>
          <StatusBar
            startGame={startGame}
          />
        </div> :
        <div className='block-start'>
          <button className='block-start__button'
            onClick={startGame}>
            Start Game
          </button>
        </div>
      }
    </ContextApp.Provider>
  )
}

ReactDOM.render(<App />, document.querySelector('.root'))
