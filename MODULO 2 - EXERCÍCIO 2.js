const nomeEleitores = [ {name:'Bob' , age: 30, voted: true},
                    {name:'Jake' , age: 32, voted: true},
                    {name:'Kate' , age: 25, voted: false}, 
                    {name:'Sam' , age: 20, voted: false}, 
                    {name:'Phil' , age: 21, voted: true}, 
                    {name:'Ed' , age:55, voted:true}, 
                    {name:'Tami' , age: 54, voted:true}, 
                    {name: 'Mary', age: 31, voted: false}, 
                    {name: 'Becky', age: 43, voted: false}, 
                    {name: 'Joey', age: 41, voted: true}, 
                    {name: 'Jeff', age: 30, voted: true}, 
                    {name: 'Zack', age: 19, voted: false} ]

let processaVotos = (idade, idadeQueVotou) => ((pesquisa, eleitor) => ({
    ...pesquisa,
    [idadeQueVotou]: eleitor.voted ? pesquisa[idadeQueVotou] + 1 : pesquisa[idadeQueVotou],
    [idade]: pesquisa[idade] + 1
    }))

let processaVotosJovens = processaVotos('jovens', 'jovensQueVotaram')
let processaVotosAdultos = processaVotos('adultos', 'adultosQueVotaram')
let processaVotosIdosos = processaVotos('idosos', 'idososQueVotaram')

function resultadoVotosPorFaixaEtaria (eleitores) {
    
    return eleitores.reduce(((pesquisa, eleitor) => {

            if (eleitor.age >= 18 && eleitor.age <= 25){
                
               return processaVotosJovens(pesquisa, eleitor)
            }
            if (eleitor.age >= 26 && eleitor.age <= 35){
                return processaVotosAdultos(pesquisa, eleitor)
            }
            if (eleitor.age >= 36 && eleitor.age <= 55){
                return processaVotosIdosos(pesquisa, eleitor)
            }
        
        }
         ),
    {jovens: 0,
     jovensQueVotaram: 0,
     adultos: 0,
     adultosQueVotaram: 0,
     idosos: 0,
     idososQueVotaram: 0
    }        
         
        )

}

console.log(resultadoVotosPorFaixaEtaria(nomeEleitores))