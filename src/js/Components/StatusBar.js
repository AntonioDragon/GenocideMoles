import React, {useCallback} from 'react'
import usePull from '../Helpers/useContextPull'

const StatusBar = (props) => {
  const {hitsMiss, catchesMole,
    setHitsMiss, setCatchesMole}= usePull()

  const ressetGame = useCallback(
      () => {
        setCatchesMole(0)
        setHitsMiss(0)
        props.startGame()
      },
      [props.startGame, setHitsMiss, setCatchesMole],
  )

  const ButtonResset = () =>{
    return (
      <button className='status-board__button-resset'
        onClick={ressetGame}>
            Resset Game
      </button>
    )
  }

  return (
    <div className='interface-game__status-board status-board'>
      <h2 className='status-board__title'>Status Bar</h2>
      <p className='status-board__difficult'>
        {`Game difficult:${Math.trunc(catchesMole/10)}`}</p>
      <p className='status-board__score'>
        {`Score:${catchesMole}`}</p>
      <p className='status-board__failed'>
        {`You failed:${hitsMiss}`}</p>
      <p className='status-board__time'>
        {`Time:${3000 - catchesMole * 15}ms`}</p>
      {hitsMiss == 3 && <ButtonResset/>}
      {catchesMole == 100 && <ButtonResset/>}
    </div>
  )
}

export default StatusBar
