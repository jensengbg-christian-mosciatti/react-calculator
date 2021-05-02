import { evaluate } from 'mathjs'

export default function reducer(state, action) {
  function addNumToOperation() {
    if (state.operation === '0') return '' + action.number
    else return state.operation + action.number
  }
  function addOpeToOperation() {
    if (
      state.operation !== '0' &&
      (!isNaN(Number(state.operation.slice(-1))) ||
        state.operation.slice(-1) === ')')
    )
      return state.operation + action.operator
    else if (
      ['+', '-', '/', '*', '.'].some((el) => el === state.operation.slice(-1))
    )
      return (
        state.operation.substring(0, state.operation.length - 1) +
        action.operator
      )
    else return state.operation
  }

  function addCommaToOperation() {
    if (state.operation === '0') return state.operation + '.'
    else if (
      ['+', '-', '/', '*'].some((el) => el === state.operation.slice(-1))
    )
      return state.operation + '0.'
    else if (state.operation.slice(-1) === ')') return state.operation
    else {
      // const operation = state.operation.split(/[\+\*\/\-]/)
      const operation = state.operation.split(/[+*/-]/)
      if (operation[operation.length - 1].includes('.')) return state.operation
      else return state.operation + '.'
    }
  }

  function changeSignInOperation() {
    if (['+', '-', '/', '*'].some((el) => el === state.operation.slice(-1)))
      return state.operation
    else {
      // const operation = state.operation.split(/(?!(?<=\()-)[+\-\*\/]/)
      const operation = state.operation.split(/(?!(?<=\()-)[+\-*/]/)

      if (operation[operation.length - 1].includes(')')) {
        const lastNum = operation[operation.length - 1].slice(2, -1)
        return (
          state.operation.slice(0, -operation[operation.length - 1].length) +
          lastNum
        )
      } else {
        const lastNum = operation[operation.length - 1]

        const result =
          state.operation.slice(0, -lastNum.length) + `(-${lastNum})`
        return result
      }
    }
  }

  function deleteLast() {
    if (state.operation.length === 1) return '0'
    else if (state.operation.slice(-1) !== ')')
      return state.operation.slice(0, -1)
    else {
      // const operation = state.operation.split(/(?!(?<=\()-)[+\-\*\/]/)
      const operation = state.operation.split(/(?!(?<=\()-)[+\-*/]/)
      const lastNum = operation[operation.length - 1].slice(2, -1)
      return (
        state.operation.slice(0, -operation[operation.length - 1].length) +
        lastNum
      )
    }
  }

  switch (action.type) {
    case 'addButtonRef': {
      const currentKeyboard = [...state.keyboard]
      currentKeyboard[action.btnId].ref = action.btnRef
      return { ...state, keyboard: [...currentKeyboard] }
    }
    case 'addNumber': {
      return { ...state, operation: addNumToOperation() }
    }
    case 'addOperator': {
      return { ...state, operation: addOpeToOperation() }
    }
    case 'result': {
      // return { ...state, operation: String(eval(state.operation)) }
      return {
        ...state,
        operation: ['+', '-', '/', '*'].some(
          (el) => el === state.operation.slice(-1)
        )
          ? state.operation
          : String(evaluate(state.operation)),
      }
    }
    case 'addComma': {
      return { ...state, operation: addCommaToOperation() }
    }
    case 'changeSign': {
      return { ...state, operation: changeSignInOperation() }
    }
    case 'reset': {
      return { ...state, operation: '0' }
    }
    case 'deleteLast': {
      return {
        ...state,
        operation: deleteLast(),
      }
    }
    default: {
    }
  }
}
