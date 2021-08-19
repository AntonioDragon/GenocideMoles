import React, {useCallback, useEffect, useState} from 'react'
import createNewMole from '../Helpers/createNewMole'
import delay from '../Helpers/setTimeOutCreater'
import usePull from '../Helpers/useContextPull'
import BlockMole from './BlockMole'

const GameBoard = () => {
  const contextPull = usePull()
  const [oldMoleid, setoldMoleid] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const newMoleid = Math.floor(Math.random() * 6)
      if (contextPull.arrMole[oldMoleid][1] == 1) {
        contextPull.setHitsMiss(contextPull.hitsMiss + 1)
        contextPull.setStateArrMole(
            createNewMole(oldMoleid, 0, contextPull.arrMole))
      }
      contextPull.setStateArrMole(
          createNewMole(newMoleid, 1, contextPull.arrMole))
      setoldMoleid(newMoleid)
    }, 4000 - contextPull.catchesMole * 15);
    return () => clearInterval(interval)
  }, [contextPull, oldMoleid])

  const clicktoMole = useCallback(
      (index) => {
        contextPull.setStateArrMole(
            createNewMole(index, 2, contextPull.arrMole))
        delay(300)
            .then(()=>
              contextPull.setStateArrMole(
                  createNewMole(index, 0, contextPull.arrMole).concat()))
      },
      [contextPull],
  )

  return (
    <div className='interface-game__game-board game-board'>
      {
        contextPull.arrMole.map((value, index) => {
          return <BlockMole
            key={index+value[0]}
            id={value[0]}
            ImgValue={value[1]}
            clicktoMole={clicktoMole}
          />
        })
      }
    </div>
  )
}

export default GameBoard
