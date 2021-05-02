import React, { useContext } from 'react'
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
  const { addButtonRef } = useContext(GlobalContext)
  return <Button btn={btn} keyboardId={id} saveRef={addButtonRef} />
}

export default Keyboard
