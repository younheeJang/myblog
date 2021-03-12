import { createStore, applyMiddleware, combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import dateClockReducer from '../reducers/dateClockReducer'
import editorDataReducer from '../reducers/editorDataReducer'

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const combinedReducer = combineReducers({
  dateClockReducer,
  editorDataReducer
})

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    if (state.dateClockReducer.dateClockReducer) nextState.dateClockReducer.dateClockReducer = state.dateClockReducer.dateClockReducer
    if (state.editorDataReducer.editorDataReducer) nextState.editorDataReducer.editorDataReducer = state.editorDataReducer.editorDataReducer
    // preserve count value on client side navigation
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

const initStore = () => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]))
}

export const wrapper = createWrapper(initStore)