import { useReducer } from 'react'
import reducer from './reducer'

function useDataManager() {
  const [{ operation, keyboard }, dispatch] = useReducer(reducer, {
    operation: '0',
    keyboard: [
      { id: 'btn-0', val: 0, func: () => addNumber(0) },
      { id: 'btn-1', val: 1, func: () => addNumber(1) },
      { id: 'btn-2', val: 2, func: () => addNumber(2) },
      { id: 'btn-3', val: 3, func: () => addNumber(3) },
      { id: 'btn-4', val: 4, func: () => addNumber(4) },
      { id: 'btn-5', val: 5, func: () => addNumber(5) },
      { id: 'btn-6', val: 6, func: () => addNumber(6) },
      { id: 'btn-7', val: 7, func: () => addNumber(7) },
      { id: 'btn-8', val: 8, func: () => addNumber(8) },
      { id: 'btn-9', val: 9, func: () => addNumber(9) },
      { id: 'btn-canc', val: 'C', func: reset },
      { id: 'btn-del', val: '❬', func: deleteLast },
      { id: 'btn-plus', val: '+', func: () => operator('+') },
      { id: 'btn-minus', val: '-', func: () => operator('-') },
      { id: 'btn-mult', val: '*', func: () => operator('*') },
      { id: 'btn-div', val: '/', func: () => operator('/') },
      { id: 'btn-eq', val: '=', func: result },
      { id: 'btn-comma', val: ',', func: comma },
      { id: 'btn-plumin', val: '±', func: changeSign },
    ],
  })

  function keyPress(key) {
    let index = -1
    switch (key) {
      case 'Backspace': {
        index = 11
        break
      }
      case 'Escape':
      case 'Delete':
      case 'c':
      case 'C': {
        index = 10
        break
      }
      case 'Enter': {
        index = 16
        break
      }
      case '.': {
        index = 17
        break
      }
      default: {
        index = keyboard.findIndex((el) => el.val == key)
      }
    }

    if (index > -1) {
      clickBtn(index)
    }
  }

  function clickBtn(index) {
    // console.log(keyboard[index].ref.current.classList)
    keyboard[index].ref.current.classList.add('btn-clicked')

    setTimeout(
      () => keyboard[index].ref.current.classList.remove('btn-clicked'),

      150
    )
    keyboard[index].ref.current.click()
  }

  function addButtonRef(btnId, btnRef) {
    dispatch({ type: 'addButtonRef', btnId, btnRef })
  }

  function addNumber(numb) {
    dispatch({ type: 'addNumber', number: numb })
    ;[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((el) =>
      keyboard[el].ref.current.blur()
    )
  }

  function reset() {
    dispatch({ type: 'reset' })
    keyboard[10].ref.current.blur()
  }

  function deleteLast() {
    dispatch({ type: 'deleteLast' })
    keyboard[11].ref.current.blur()
  }

  function operator(oper) {
    dispatch({ type: 'addOperator', operator: oper })
    ;[12, 13, 14, 15].forEach((el) => keyboard[el].ref.current.blur())
  }

  function result() {
    dispatch({ type: 'result' })
    keyboard[16].ref.current.blur()
  }

  function comma() {
    dispatch({ type: 'addComma' })
    keyboard[17].ref.current.blur()
  }

  function changeSign() {
    dispatch({ type: 'changeSign' })
    keyboard[18].ref.current.blur()
  }

  return {
    operation,
    keyboard,
    addButtonRef,
    keyPress,
  }
}

export default useDataManager
