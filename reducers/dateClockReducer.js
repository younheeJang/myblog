import {TICK} from '../actions/dateClockAction';

const initialState = {
  time: null,
  interval: null
}

const clockReducer = (state = initialState, action) => {
  switch(action.type) {
    case TICK:
      return {
        ...state,
        time: action.time
      }
    default:
      return state
  }
}

export default clockReducer;