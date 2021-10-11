let calculadora = (() => {
    
    let historyOperations = []
        
    let _equals = (numberOne,operatorOne,numberTwo) => {
        
        if ( operatorOne === '-') return numberOne-numberTwo
        if ( operatorOne === '+') return numberOne+numberTwo
        if ( operatorOne === '*') return (numberOne*numberTwo).toFixed(2)
        if ( operatorOne === '/') return (numberOne/numberTwo).toFixed(2)       
    }

    let enter = (number1, operator, number2) => {
            addMath = `${number1} ${operator} ${number2}`
            historyOperations = [...historyOperations , addMath]
            return _equals(number1, operator, number2)

    }

    let list = () => {

       return  historyOperations

    }

    let reset = () => {   

        historyOperations = ['']
        return `History was reseted`

    }

return {enter, 
    list, 
    reset}
})()


console.log(calculadora.enter(25,'+',3))
console.log(calculadora.enter(25,'-',3))
console.log(calculadora.enter(25,'/',3))
console.log(calculadora.enter(25,'*',3))
console.log(calculadora.list())
console.log(calculadora.reset())
console.log(calculadora.list())