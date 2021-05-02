import React, { useContext, useEffect } from 'react'
import './App.css'
import { GlobalContext } from './store/GlobalState'

import Keyboard from './components/Keyboard'

function App() {
  const { operation, keyPress } = useContext(GlobalContext)

  // const memoKeyPress = useCallback( () => keyPress())
  useEffect(
    () =>
      document.addEventListener('keyup', function (event) {
        event.stopPropagation()
        keyPress(event.key)
        // memoKeyPress(event.key)
      }),
    []
  )

  return (
    <div>
      <header className="text-outside">
        <h4>NG Instruments</h4>
      </header>
      <main className="App">
        <div className="CalcField">{operation}</div>
        <Keyboard />
      </main>
      <div className="text-outside">
        <p>Try using the calculator by typing on your keyboard</p>
      </div>
    </div>
  )
}

/* <div className="info">Vidareutveckla applikationen så att den blir en enkel miniräknare med siffror och några räknesätt.</div> */
export default App
