import React from 'react'
import usePull from '../Helpers/useContextPull'
import GameBoard from './GameBoard'

const InterfaceGame = (props) => {
  const {hitsMiss, catchesMole} = usePull()

  const createNewMole = (index, state, tempArr) => {
    tempArr[index].moleImg = state
    return tempArr
  }

  return (
    <>
      {
        hitsMiss < 3 && catchesMole < 100 ?
        <GameBoard createNewMole={createNewMole}/> :
        <div className='interface-game__winlose block-winlose'>
          <img className='block-winlose__moles'
            src={
              hitsMiss == 3 ? '../static/images/moleWin.png':
              catchesMole == 100 && '../static/images/moleDead.png'
            }
            alt='Moles'
          />
          <p className='block-winlose__text' >{
            hitsMiss == 3 ? 'You lose' :
            catchesMole == 100 && 'You win'
          }</p>
        </div>
      }
    </>
  )
}

export default InterfaceGame
