const formSubmit = document.querySelector('form')
const userList = document.querySelector('ul')

const removeUser = (id) => {
    const userToRemove = document.querySelector('[id ="'+id+'"]')
    userToRemove.remove()
    console.log(userToRemove)
    console.log(id)
}

const resetInput = () => {
    formSubmit.reset()
}

const createUserLi = (user, id) => {
    const newUser = document.createElement('li')
    const btnRemove = document.createElement('button')

    newUser.innerText = user
    newUser.id = id

    btnRemove.onclick = () => removeUser(id)
    btnRemove.name = user
    btnRemove.innerText = 'Remover'
    
    userList.appendChild(newUser)
    newUser.appendChild(btnRemove)

}

formSubmit.addEventListener('submit', evt => {
    evt.preventDefault()
    createUserLi(evt.target[0].value, evt.timeStamp)
    resetInput()
} )