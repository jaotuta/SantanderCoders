

const valorBotao = document.querySelectorAll('.teclaNumero')
const operadores = document.querySelectorAll('.operacao')
let valores = []
let objValores = {}
let contador = 0

    const fazJoinNoArray = (array) =>{
        return +array.join('')
    }

    const operadoresMatematicos = (operador) => {
        let numeroGrande = fazJoinNoArray(valores)
        objValores[contador] = {[operador]: numeroGrande}
        valores = []
        contador += 1
    }
 

    operadores.forEach(btn => btn.addEventListener(
        'click', evt => {
            attCampoConta(evt.target.innerText)
        }
    ))

    const attCampoConta = (digito) => {
        const campoConta = document.querySelector('.live')
        campoConta.innerText += ` ${digito}`
    }

    const attCampoResultado = (resultado) => {
        const campoResultado = document.querySelector('.result')
        campoResultado.innerText += ` ${resultado}`
    }

    const limpaConta = () => {
        const campoConta = document.querySelector('.live')
        const campoResultado = document.querySelector('.result')
        campoConta.innerText = "";
        campoResultado.innerText = '';
        valores = []
        campoVazioDois()
    }

    const campoVazio = () => {
        const campoConta = document.querySelector('.live')
        campoConta.className = "live"
    }

    const campoVazioDois = () => {
        const campoConta = document.querySelector('.live')
        campoConta.classList = "live vazio"
    }
    valorBotao.forEach(btn => btn.addEventListener(
        'click', evt => {
            const val = evt.target.innerText
            valores = [...valores, val]
            attCampoConta(+evt.target.innerText)
            campoVazio()
                    
        }))

    const fnIgual = () => {
        operadoresMatematicos()
        let valorFinal = 0;
        let operadorAnterior = 'undefined';
        
        Object.values(objValores).forEach( chave => {
            if(operadorAnterior == 'undefined'){
                operadorAnterior = Object.keys(chave)
                valorFinal = +Object.values(chave)
                           
            }else if(operadorAnterior == '+') {
                valorFinal += +Object.values(chave)
                operadorAnterior = Object.keys(chave)
            }else if(operadorAnterior == '-') {
                valorFinal -= +Object.values(chave)
                operadorAnterior = Object.keys(chave)
            }else if(operadorAnterior == '*') {
                valorFinal *= +Object.values(chave)
                operadorAnterior = Object.keys(chave)
            }else if(operadorAnterior == '/') {
                valorFinal /= +Object.values(chave)
                operadorAnterior = Object.keys(chave)
            }

        })
       console.log(valorFinal, 'Retorno') 
       attCampoResultado(valorFinal)
       return valorFinal 
    }

    
   

