import React, {useCallback, useState} from 'react'
import usePull from '../Helpers/useContextPull'

const mole = '../static/images/mole.png'
const moleDead ='../static/images/moleDead.png'
const moleHole = '../static/images/moleHole.png'

const BlockMole = (props) => {
  const {setHitsMiss, setCatchesMole,
    HitsMiss, catchesMole} = usePull()
  const [ClassHitMiss, setClassHitMiss] = useState(['block-moles'])


  const hitMole = useCallback(
      () => {
        if (props.ImgValue == 0) {
          missMole()
          setHitsMiss(HitsMiss + 1)
        }
        if (props.ImgValue == 1) {
          props.clicktoMole(props.id)
          setCatchesMole(catchesMole + 1)
        }
      },
      [props.ImgValue,
        props.id,
        missMole,
        props.clicktoMole,
        setCatchesMole,
        setHitsMiss,
        HitsMiss,
        catchesMole],
  )

  const missMole = () =>{
    const arr = ['block-moles']
    arr.push('block-moles--wrong-press')
    setClassHitMiss(arr)
    setTimeout(() => setClassHitMiss(['block-moles']), 100);
  }

  return (
    <div className={ClassHitMiss.join(' ')} >
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
