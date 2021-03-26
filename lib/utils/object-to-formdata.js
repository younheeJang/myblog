 const ObjectToFormData = (obj) => {
    
    if(typeof obj === 'object'){
    const keys = Object.keys(obj) 
    let result = ''
    for (let i = 0; i < keys.length; i++) {
      
      let lastOne = keys.length-1;
      let key = keys[i]
      result += keys[i] + '=' + obj[key] + '&'
      
      if(i == lastOne) {
          result += obj[key] + '=' + keys[i]
      }
    }
    return result
 }
}

export default ObjectToFormData