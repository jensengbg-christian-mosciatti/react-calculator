import React, { useEffect, useRef } from 'react'
import './Button.scss'

const Button = React.memo(({ btn, saveRef, keyboardId }) => {
  const { id, val, func } = btn

  const thisButton = useRef(null)

  // const memoSaveRef = useCallback(() => {
  //   saveRef(thisButton)
  // }, [thisButton])

  useEffect(() => {
    saveRef(keyboardId, thisButton)
  }, [keyboardId, thisButton, saveRef])

  return (
    <button
      style={{ gridArea: id }}
      id={id}
      className="btn"
      onClick={func}
      ref={thisButton}
    >
      {val}
    </button>
  )
})

// onKeyPress={() => onKeyPress(thisButton)}

export default Button
