import React, {useCallback, useEffect, useState} from 'react'
import usePull from '../Helpers/useContextPull'
import BlockMole from './BlockMole'

const GameBoard = () => {
  const {HitsMiss, catchesMole,
    setHitsMiss, setStateArrMole, arrMole} = usePull()
  const [oldMoleid, setoldMoleid] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const newMoleid = Math.floor(Math.random() * 6)
      if (arrMole[oldMoleid][1] == 1) {
        setHitsMiss(HitsMiss+1)
        createNewMole(oldMoleid, 0)
      }
      createNewMole(newMoleid, 1)
      setoldMoleid(newMoleid)
    }, 4000 - catchesMole * 15);
    return () => clearInterval(interval)
  }, [createNewMole, catchesMole, arrMole, oldMoleid, setHitsMiss, HitsMiss])

  const clicktoMole = useCallback(
      (index) => {
        createNewMole(index, 2)
        setTimeout(() => createNewMole(index, 0), 300)
      },
      [createNewMole],
  )

  const createNewMole = (index, state) => {
    const temp = arrMole.concat()
    temp[index][1] = state
    setStateArrMole(temp)
  }

  return (
    <div className='interface-game__game-board game-board'>
      {
        arrMole.map((value, index) => {
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
