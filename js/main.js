// alert('hello')
const button = document.getElementById('button')
// const password = document.getElementById('password')
const username = document.getElementById('username')
const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')
const  images= []

let usernameValue =''

saveImages()

username.addEventListener('change', saveUsername)

function saveUsername() {
  usernameValue = username.value
}

button.addEventListener('click', login)

function login() {
  if(usernameValue==='Draydon'){ 
    showImages()
  } else {
  
  alert('wrong user name')
  }
}

function saveImages() {
  fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5')
  .then(response => response.json())
  .then(json => images.push(json))
}

function showImages() {
  console.log(images[0][0])

  let i = 0
  while (i <= 4) {
    let h1 = document.createElement('h1')
    let img = document.createElement('img')
    h1.innerHTML = images[0][i].title
    div2.appendChild(h1)
    img.src = images[0][i].url
    h1.appendChild(img)
    console.log(img) 
    console.log(h1) 
  i++
  }
} 



