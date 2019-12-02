let likesTally = 0

const button = document.getElementById('button')
const username = document.getElementById('username')
const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')
const  images= [] 
const likeButton = document.getElementsByClassName('likebutton')
const likesDiv = document.createElement('div')

div1.appendChild(likesDiv)
let usernameValue =''

saveImages()

username.addEventListener('change', saveUsername)

const likePhoto = () => {

likesTally ++
console.log('This photo has been liked and to5al likes are now: ',likesTally)
likesDiv.innerHTML = `Total: ${likesTally}`
}
function saveUsername() {
  usernameValue = username.value
}

button.addEventListener('click', login)

function login() {
  if(usernameValue==='Draydon'){ 
    showImages()
  } else {
    // showImages() // For debugging (remove)
  
  alert('wrong user name')
  }
}

function saveImages() {
  fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5')
  .then(response => response.json())
  .then(json => images.push(json))
}

function showImages() {
//   console.log(images[0][0])

  let i = 0
  while (i <= 4) {
    let div = document.createElement('div')
    let img = document.createElement('img')
    let likeButton = document.createElement('BUTTON') 
    
    likeButton.innerHTML = 'like' 
    likeButton.className = 'likebutton'
likeButton.addEventListener('click', likePhoto)
    div.innerHTML = images[0][i].title
    div.className = 'imageTitle'
    div2.appendChild(div)
    img.src = images[0][i].url
    img.className = 'image'
    div.appendChild(img)
    div.appendChild(likeButton)
    
    console.log(img) 
    console.log(div) 
  i++
  }
} 
console.log(images)


//  const Image = {
//   albumId: 1,
// id: 1,
// thumbnailUrl: "https://via.placeholder.com/150/92c952",
// title: "accusamus beatae ad facilis cum similique qui sunt",
// url: "https://via.placeholder.com/600/92c952"
// }

