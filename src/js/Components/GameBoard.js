import React, {useCallback, useEffect, useState} from 'react'
import delay from '../Helpers/setTimeOutCreater'
import usePull from '../Helpers/useContextPull'
import BlockMole from './BlockMole'

const GameBoard = (props) => {
  const contextPull = usePull()
  const [oldMoleid, setoldMoleid] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      let miss = 0;
      const newMoleid = Math.floor(Math.random() * 6)
      if (contextPull.arrMole[oldMoleid].moleImg == 1) {
        miss = 1
        contextPull.setStateArrMole(
            props.createNewMole(oldMoleid, 0, contextPull.arrMole).concat())
      }
      contextPull.setStateArrMole(
          props.createNewMole(newMoleid, 1, contextPull.arrMole).concat())
      setoldMoleid(newMoleid)
      contextPull.setHitsMiss(contextPull.hitsMiss + miss)
    }, 3000 - contextPull.catchesMole * 15);
    return () => clearInterval(interval)
  }, [contextPull, oldMoleid, props.createNewMole])

  const clicktoMole = useCallback(
      (index) => {
        contextPull.setStateArrMole(
            props.createNewMole(index, 2, contextPull.arrMole).concat())
        delay(300)
            .then(()=>
              contextPull.setStateArrMole(
                  props.createNewMole(index, 0, contextPull.arrMole).concat()))
      },
      [contextPull, props.createNewMole],
  )

  return (
    <div className='interface-game__game-board game-board'>
      {
        contextPull.arrMole.map((value, index) => {
          return <BlockMole
            key={value.id}
            id={value.id}
            ImgValue={value.moleImg}
            clicktoMole={clicktoMole}
          />
        })
      }
    </div>
  )
}

export default GameBoard
