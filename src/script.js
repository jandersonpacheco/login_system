import { users } from "./users.js"

async function getUsers(username, password) {
    const response = await fetch('http://localhost:3000/users')
    const usersData = await response.json()
    
    let existsUser = usersData.find((x) => x.username == username && x.password == password)
    if(existsUser){
        location.href = 'users_management.html'
    }else
    alert('Credenciais inválidas')
}

document.getElementById('login-btn').addEventListener('click', () =>{
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    if(username !== '' && password !== ''){
        getUsers(username, password)
    }else{
        alert('Por favor, preencha todos os campos.')
    }
    
})



console.log(users)