import { users } from "./users.js"

document.getElementById('login-btn').addEventListener('click', () =>{
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    if(username !== '' && password !== ''){
        valid(username, password)
    }else{
        alert('Por favor, preencha todos os campos.')
    }
    
})

function valid (username, password){
    let existsUser = users.find((x) => x.username == username && x.password == password)
    if(existsUser){
        location.href = 'users_management.html'
    }else
    alert('Credenciais inválidas')
}

console.log(users)