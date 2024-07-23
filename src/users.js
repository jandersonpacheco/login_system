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
    const passwordInput = AddInput('user' + index, 'password')
    const skipLabel = document.createElement('br')

    const registerBtn = document.createElement('button')
    registerBtn.className = 'register-btn'
    registerBtn.id = 'register-btn'
    registerBtn.innerText = 'Cadastrar Usuário'

    userData.append(usernameLabel, usernameInput, passwordLabel, passwordInput, skipLabel, registerBtn)

    registerBtn.addEventListener('click', ()=>{
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

document.getElementById('show-table').addEventListener('click', function createTable() {
    const table = document.getElementById('user-table-body-row')
    table.innerText = '' 

    users.forEach((data, i) =>{
        const index = ++i
        const tableRow = document.createElement('tr')
        const position = addTableData(index, 'td-' + i)
        const username = addTableData(data.username,  'td-' + i)
        const password = addTableData(data.password, 'td-' + i)
        const removeUser = document.createElement('button')
        removeUser.innerText = 'Excluir usuário'

        removeUser.addEventListener('click', () => {
            users.splice(--i, 1)

            createTable()
        })

        table.appendChild(tableRow)
        tableRow.append(position, username, password, removeUser)    
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