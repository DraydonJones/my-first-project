// alert('hello')
const button = document.getElementById('button')
const password = document.getElementById('password')
const username = document.getElementById('username')
const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')
const h1 = document.createElement('h1')


let usernameValue =''


username.addEventListener('change', saveUsername)

function saveUsername() {
  usernameValue = username.value
}

button.addEventListener('click', login)

function login() {
  if(usernameValue==='Draydon'){
    console.log('hello')
    h1.innerHTML ='Hi'
div2.appendChild(h1)
  }else {
  console.log(usernameValue)
}
  // alert('hello ' + usernameValue)
}
