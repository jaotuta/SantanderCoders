//-- EXERCÍCIO 1 --


const pessoas = [{name: 'João Lucas', age: 30},
                 {name: 'Carolina', age: 27},
                 {name: 'Augusto', age: 55}, 
                 {name: 'Miguel', age:6}, 
                 {name: 'José', age: 11}
    ]



    console.log(pessoas.map((pessoa) => (
        (pessoa.age > 18) ? `${pessoa.name} Pode ir ver o Filme` : `${pessoa.name} Não tem idade!!!`)
        ))