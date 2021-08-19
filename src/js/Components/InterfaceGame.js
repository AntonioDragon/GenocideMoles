import React from 'react'
import usePull from '../Helpers/useContextPull'
import GameBoard from './GameBoard'

const InterfaceGame = (props) => {
  const {hitsMiss, catchesMole} = usePull()

  return (
    <>
      {
        hitsMiss < 3 && catchesMole < 100 ?
        <GameBoard/> :
        <div className='interface-game__winlose block-winlose'>
          <img className='block-winlose__moles'
            src={
              hitsMiss == 3 ? '../static/images/moleWin.png':
              catchesMole == 100 && '../static/images/moleDead.png'
            }
            alt='Moles'
            onClick={() => hitMole()}/>
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
