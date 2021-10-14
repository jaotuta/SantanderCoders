class CalculadoraFuncoesUnificadas {
    historyOperations = []
    

        constructor(){
            this.numerosSalvos = {numero1: null, numero2: null}
        }
             
       enter (number) {

            (this.numerosSalvos.numero1) ?  this.numerosSalvos.numero2 = number : this.numerosSalvos.numero1 = number
            console.log(this.numerosSalvos)
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
         
        equals () {
          let addMath = `${this.numerosSalvos.numero1} + ${this.numerosSalvos.numero2}`
          this.historyOperations = [...this.historyOperations , addMath]
          return this.numerosSalvos.numero1+this.numerosSalvos.numero2
        }
  }
  
  let calculadoraQueSoma = new CalculaSoma()
 

  calculadoraQueSoma.enter(18)
  calculadoraQueSoma.enter(3)
 
  console.log(calculadoraQueSoma.equals())
  console.log(calculadoraQueSoma.list())
  console.log(calculadoraQueSoma.reset())
  console.log(calculadoraQueSoma.list())
