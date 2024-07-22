export let users = [
    {
        username: 'admin',
        password: 'admin'
    }
]

let i = users.length

document.getElementById('new-user-btn').addEventListener('click', () =>{
    const userData = document.getElementById('users')

    const index = i++
    const usernameLabel = AddLabel('user' + index, 'Username: ')
    const usernameInput = AddInput('user' + index, 'email')
    const passwordLabel = AddLabel('user' + index, 'Password: ')
    const passwordInput = AddInput('user1' + index, 'password')
    const skipLabel = document.createElement('br')

    const registerBtn = document.createElement('button')
    registerBtn.className = 'register-btn'
    registerBtn.id = 'register-btn'
    registerBtn.innerText = 'Cadastrar Usuário'

    userData.append(usernameLabel, usernameInput, passwordLabel, passwordInput, skipLabel, registerBtn)

    registerBtn.addEventListener('click', ()=>{
        const userData = document.getElementById('users')
        const username = usernameInput.value
        const password = passwordInput.value

        let user = {username: username, password: password}
            if(user.username !== '' && user.password !== ''){
                users.push(user)
            
                console.log(users)
            } else{
                alert('Preencha todos os campos!')
            }
    })
}, {once: true})

function AddInput(id, text){
    const input = document.createElement('input')
    input.id = id
    input.type = text
    

    return input
}

function AddLabel(id, text){
    const label = document.createElement('label')
    label.id = id
    label.innerText = text

    return label
}

function AddTableData(text, id){
    const tableData = document.createElement('td')
    tableData.innerText = 
    tableData.id = id

    return tableData
}