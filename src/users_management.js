import { users } from "./users.js"

let i = users.length

document.getElementById('new-user-btn').addEventListener('click', () =>{
    const userData = document.getElementById('users')

    const index = i++
    const usernameLabel = AddLabel('user' + index, 'Email: ')
    const usernameInput = AddInput('user' + index, 'email')
    const passwordLabel = AddLabel('user' + index, 'Senha: ')
    const passwordInput = AddInput('user' + index, 'password')
    const skipLabel = document.createElement('br')

    const registerBtn = document.createElement('button')
    registerBtn.className = 'btn'
    registerBtn.id = 'register-btn'
    registerBtn.innerText = 'Cadastrar Usuário'

    usernameLabel.classList.add('class','new-user-form')
    passwordLabel.classList.add('class','new-user-form')
    usernameInput.classList.add('class','new-user-input')
    registerBtn.classList.add('class','btn')
    passwordInput.classList.add('class','new-user-input')

    userData.append(usernameLabel, usernameInput, passwordLabel, passwordInput, skipLabel, registerBtn)

    registerBtn.addEventListener('click', ()=>{
        const username = usernameInput.value
        const password = passwordInput.value

        let user = {username: username, password: password}
            if(user.username !== '' && user.password !== ''){
                users.push(user)
                usernameInput.value = ''
                passwordInput.value = ''
                console.log(users)
            } else{
                alert('Preencha todos os campos!')
            }
    })
}, {once: true})

document.getElementById('show-table').addEventListener('click', function createTable() {
    const table = document.getElementById('user-table-title') 
    table.innerText = ''

    const tableTitle = document.createElement('tr')
    const headPosition = addTableHeader('#', 'td-' + i)
    const headUsername = addTableHeader('Login',  'td-' + i)
    const headPassword = addTableHeader('Senha', 'td-' + i)
    const headRemoveUser = addTableHeader('Ação', 'td-' + i)

    headPosition.classList.add('class','user-table-head-row')
    headUsername.classList.add('class','user-table-head-row')
    headPassword.classList.add('class','user-table-head-row')
    headRemoveUser.classList.add('class','user-table-head-row')
    
    table.appendChild(tableTitle)
    tableTitle.append(headPosition, headUsername, headPassword, headRemoveUser)
    
    users.forEach((data, i) =>{
        const index = ++i

        const tableRow = document.createElement('tr')
        const position = addTableData(index, 'td-' + i)
        const username = addTableData(data.username,  'td-' + i)
        const password = addTableData(data.password, 'td-' + i)
        const removeUser = document.createElement('button')
        removeUser.innerText = 'Excluir usuário'

        table.appendChild(tableRow)
        tableRow.append(position, username, password, removeUser)

        removeUser.addEventListener('click', () => {
            users.splice(--i, 1)
            createTable()
        })

        position.classList.add('class','user-table-body-row')
        username.classList.add('class','user-table-body-row')
        password.classList.add('class','user-table-body-row')
        removeUser.classList.add('class','remove-btn')        

        const newUserInputs = document.getElementById('users')
        if(newUserInputs !== null){
            newUserInputs.remove()
        }
    })
})

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

function addTableData(text, id){
    const tableData = document.createElement('td')
    tableData.innerText = text
    tableData.id = id

    return tableData
}

function addTableHeader(text, id ){
    const tableHeader = document.createElement('th')
    tableHeader.innerText = text
    tableHeader.id = id
    return tableHeader
}