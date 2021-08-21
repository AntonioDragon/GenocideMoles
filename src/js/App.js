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
  const [catchesMole, setCatchesMole] = useState(0)

  const startGame = useCallback(
      () => setStateArrMole([
        {id: 0, moleImg: 0},
        {id: 1, moleImg: 0},
        {id: 2, moleImg: 0},
        {id: 3, moleImg: 0},
        {id: 4, moleImg: 0},
        {id: 5, moleImg: 0}]),
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
