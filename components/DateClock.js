import React from 'react'
import {connect} from 'react-redux'
import {startTimer} from '../actions/dateClockAction'

class DateClock extends React.Component {
    
  constructor(props) {
    super(props);
    console.log(props)
  }

  componentDidMount() {
    this.props.startTimer()
  }

  render() {
    return (
      <a href="#" class="inline-block rounded-full text-white 
        bg-black hover:bg-gray-500 duration-300 
        text-xs font-bold 
        mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
        opacity-90 hover:opacity-100">
          {this.props.time}
       </a>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    time: state.dateClockReducer.time
  }
}

const mapDispatchToProps = (dispatch) => {
   
  return {
    startTimer: () => {dispatch(startTimer())}
  }
}

DateClock = connect(mapStateToProps, mapDispatchToProps)(DateClock);

export default DateClock;