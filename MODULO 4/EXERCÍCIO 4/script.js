const objClasses = {
    on : 'on',
    off: 'off'
}
const objCorredores = {}
const arrayCorredores = []

const fnTrocaClasses = () => {
    let aux = objClasses.on
    objClasses.on = objClasses.off
    objClasses.off = aux
    const botoes = document.querySelectorAll('button')
    botoes.forEach((botao) =>{
    (botao.outerText == 'Start') ? botao.className = objClasses.on : botao.className = objClasses.off
})

}


const criaLi = (corredor) => {
    const list = document.querySelector('ul')
    const newLiTime = document.createElement('li')
    newLiTime.className = corredor
    newLiTime.innerText = `Tempo volta ${corredor}: 0 segundos`
    list.appendChild(newLiTime)

} 


const attTime = (nomeCorredor,tempo) => {
    const novoTempo = document.querySelector('.'+ nomeCorredor)
    novoTempo.innerText = `Tempo volta ${nomeCorredor}: ${tempo} segundos`

    objCorredores[nomeCorredor] = tempo
    sessionStorage.setItem('Corredores', JSON.stringify(objCorredores))
    let resultadoObj = JSON.parse(sessionStorage.Corredores)
    console.log(resultadoObj)
}

const limpaInput = () => {
    const form = document.querySelector('form')
    form.reset()

}

const cronometro = (() => {
    let contador = '';
    let tempo = 0

    const inicio = (nomeCorredor) => {
        contador = setInterval(() => {
            
            tempo += 0.1

            attTime(nomeCorredor, tempo.toFixed(2))
        },100
        )
    }

    const botaoStop = document.querySelector('#stop')
    botaoStop.addEventListener('click', (evt) => {
        cronometro.resetContador()
        evt.preventDefault()
        fnTrocaClasses()

    })

    const resetContador = () => {

        clearInterval(contador)
        limpaInput()
        tempo = 0
    }

    return {inicio, resetContador}
})()


const form = document.querySelector('form')

form.addEventListener('submit', (evt) =>{

    evt.preventDefault()
    const nomeCorredor = evt.target[0].value
    criaLi(nomeCorredor)
    cronometro.inicio(nomeCorredor)
    fnTrocaClasses()


})


