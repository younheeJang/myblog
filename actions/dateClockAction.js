import {format} from 'date-fns';

export const START_TIMER = 'START_TIMER';
export const TICK = 'TICK';

const tick = ({interval}) => {
  return {
    type: TICK,
    time: format(new Date(), 'Y M d EEEE H:m:ss'),
    interval
  }
}



export const startTimer = () => {
  
  return (dispatch, getState) => {
    dispatch({
      type: START_TIMER
    });

    clearInterval(getState.interval);

   const interval = setInterval(() => {
     dispatch(tick({interval}))
   }, 60)
  }
}
