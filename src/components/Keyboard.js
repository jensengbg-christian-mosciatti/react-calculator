import React, { useCallback, useContext } from 'react'
import './Keyboard.scss'
import { GlobalContext } from '../store/GlobalState'

import Button from './Button'

function Keyboard() {
  const { keyboard } = useContext(GlobalContext)

  // function keyPress(event, ppp) {
  //   console.log('keypressed', event, ppp)
  // }

  return (
    <div className="keyboard-area">
      {keyboard.map((key, id) => (
        <MappedComponent key={id} btn={key} id={id} />
      ))}
    </div>
  )
}

const MappedComponent = ({ btn, id }) => {
  // console.log('here key', btn)
  const { addButtonRef } = useContext(GlobalContext)

  // const cazzo = (btnId) => {
  //   console.log('pre')
  //   return function (btnRef) {
  //     console.log(btnRef)
  //     addButtonRef(btnId, btnRef)
  //   }
  // }

  // const memoButtonRef = useCallback(() => {
  //   const getButtonRef = (btnId) => {
  //     console.log('pre')
  //     return function (btnRef) {
  //       console.log(btnRef)
  //       addButtonRef(btnId, btnRef)
  //     }
  //   }
  //   getButtonRef(id)
  // }, [id, addButtonRef])

  // return <Button btn={btn} saveRef={memoButtonRef} />
  return <Button btn={btn} keyboardId={id} saveRef={addButtonRef} />
}

/* <Button key={id} num={id} onClick={addNumber} /> */
export default Keyboard
