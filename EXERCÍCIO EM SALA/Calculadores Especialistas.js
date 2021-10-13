class CalculadoraFuncoesUnificadas {
    historyOperations = []

             
       enter (number1, operator, number2) {
              let addMath = `${number1} ${operator} ${number2}`
              this.historyOperations = [...this.historyOperations , addMath]
              
  
      }
  
      list () {
  
         return  this.historyOperations
  
      }
  
      reset () {   
  
        this.historyOperations = ['']
          return `History was reseted`
  
      }
  }
  
      
  class CalculaSoma extends CalculadoraFuncoesUnificadas  {
         
        soma (number1, number2) {
          super.enter(number1, '+', number2)
          return number1+number2
        }
  }
  
  class CalculaSubtrai extends CalculadoraFuncoesUnificadas  {
         
    subtrai (number1, number2) {
      super.enter(number1, '-', number2)
      return number1-number2
    }
} 

class CalculaDivide extends CalculadoraFuncoesUnificadas  {
         
    divide (number1, number2) {
      super.enter(number1, '/', number2)
      return number1/number2
    }
} 

class CalculaMultiplica extends CalculadoraFuncoesUnificadas  {
         
    multiplique (number1, number2) {
      super.enter(number1, '*', number2)
      return number1*number2
    }
} 
  let calculadoraQueSoma = new CalculaSoma()
  let calculadoraQueSubtrai = new CalculaSubtrai()
  let calculadoraQueDivide = new CalculaDivide()
  let calculadoraQueMultiplique = new CalculaMultiplica()

  console.log(calculadoraQueSoma.soma(13,2))
  console.log(calculadoraQueSoma.list())
  console.log(calculadoraQueSoma.reset())
  console.log(calculadoraQueSoma.list())

  console.log(calculadoraQueSubtrai.subtrai(13,2))
  console.log(calculadoraQueSubtrai.list())
  console.log(calculadoraQueSubtrai.reset())
  console.log(calculadoraQueSubtrai.list())

  console.log(calculadoraQueDivide.divide(13,2))
  console.log(calculadoraQueDivide.list())
  console.log(calculadoraQueDivide.reset())
  console.log(calculadoraQueDivide.list())

  console.log(calculadoraQueMultiplique.multiplique(13,2))
  console.log(calculadoraQueMultiplique.list())
  console.log(calculadoraQueMultiplique.reset())
  console.log(calculadoraQueMultiplique.list())