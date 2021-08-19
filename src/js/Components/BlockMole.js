import React, {useCallback, useState} from 'react'
import usePull from '../Helpers/useContextPull'
import classNames from 'classnames'
import delay from '../Helpers/setTimeOutCreater'

const mole = '../static/images/mole.png'
const moleDead ='../static/images/moleDead.png'
const moleHole = '../static/images/moleHole.png'

const BlockMole = (props) => {
  const contextPull = usePull()
  const [classHitMiss, setClassHitMiss] = useState(false)


  const hitMole = useCallback(
      () => {
        if (props.ImgValue == 0) {
          setClassHitMiss(true)
          delay(300).then(
              ()=>{
                setClassHitMiss(false)
                contextPull.setHitsMiss(contextPull.hitsMiss + 1)
              })
        }
        if (props.ImgValue == 1) {
          props.clicktoMole(props.id)
          contextPull.setCatchesMole(contextPull.catchesMole + 1)
        }
      },
      [props.ImgValue, props.id, props.clicktoMole, contextPull],
  )

  return (
    <div className={
      classNames('block-moles', {'block-moles--wrong-press': classHitMiss})
    }>
      <img className='block-moles__moles'
        src={
          props.ImgValue == 0 ? moleHole :
          props.ImgValue == 1 ? mole :
          moleDead
        }
        alt='Moles'
        onClick={hitMole}/>
    </div>
  )
}

export default BlockMole
