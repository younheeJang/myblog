import PropTypes from 'prop-types';
import { useState, useEffect } from "react";

  
const Delay = ({wait, children}) => {
  
    const [stateWait, setStateWait] = useState(true);
  
    function timer() {
        setTimeout(() => {
        setStateWait(false)
        }, wait)
    }
  
    useEffect(() => {
        timer();
        return () => {clearTimeout(timer());}
    }, []); 


    if (stateWait===false) {
        return children     
    }

    return null;    
}

Delay.defaultProps = {
    wait: 250
}

Delay.propTypes = {
    children: PropTypes.node,
    wait: PropTypes.number,
}

export default Delay;

