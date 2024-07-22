export let users = [
    {
        username: 'admin',
        password: 'admin'
    }
]

let i = users.length

document.getElementById('new-user-btn').addEventListener('click', () =>{
    const userData = document.getElementById('header-container')

    const index = i + 1
    const fullnameLabel = label('Username: ', 'username')
    const fullnameInput = label('username'+ index)

    userData.append(fullnameLabel, fullnameInput)
})

function usersList (username, password) {
    const userList = {
        username: users.username,
        password: users.password
    }

    return usersList
}

function AddInput(text, id){
    const input = document.createAttribute('input')
    input.type = text
    input.id = id
}

function AddLabel(text, id){
    const label = document.createAttribute('label')
    label.innerText = text
    label.id = id
}

function AddTableData(text, id){
    const tableData = document.createAttribute('td')
    tableData.innerText = 
    tableData.id = id
}