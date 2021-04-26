export type combineTypes = object | number | string | any[];

export const ConsoleLog = (value:combineTypes):void=> {
    if(typeof value === 'object'){
        console.log(Object.values(value))
    }
    if(typeof value === 'number'){
        console.log(+value)
    }
    if(typeof value === 'string'){
        console.log(value)
    }
    if(Array.isArray(value)){
        for(let i=0; i<value.length; i++){
            console.log(value[i])
        }
    } 
    else{
        console.log(new Error('Please Check input value type : it should be object | number | string | array '))
    }
}

// function return value:

 