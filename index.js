const theme = document.getElementById('theme')
const form = document.getElementById('form')
const searchInput = document.getElementById('searchInput')
const errorMessage = document.getElementById('errorMessage')
const button = document.getElementById('button')
const userCard =document.getElementById('userCard')
const userImage = document.getElementById('userImage')
const nameDisplay = document.getElementById('name')
const login = document.getElementById('login')
const dateCreated = document.getElementById('date')
const userBio = document.getElementById('userBio')
const repos = document.getElementById('repos')
const followers = document.getElementById('followers')
const following = document.getElementById('following')
const locationDisplay = document.getElementById('location')
const twitter = document.getElementById('twitter')
const blogLink = document.getElementById('blog')
const companyName = document.getElementById('company')

let user 

              

function getUserData(user){
    fetch(`https://api.github.com/users/${user}`)
        .then(res => {
          if(res.status == 200){
            errorMessage.textContent = ''
            return res.json()
          }else{
            throw new Error(res.status)
          }
        })
        .then(data =>{
            renderData(data)
        })
        .catch(Error =>{
          errorMessage.textContent = 'No result'
          searchInput.placeholder =''
          searchInput.style.width='25%'
        })
    
}

function renderData(data){
      const date = new Date(data.created_at)
      const createdDate = date.toDateString().slice(4,20)
      // let name = data.name
      // let login = data.login

      if(data.name === null){
          nameDisplay.textContent = data.login
      }else{
         nameDisplay.textContent = data.name
      }

      login.textContent =  data.login
      userImage.src = data.avatar_url
      dateCreated.textContent =`Joined ${createdDate}`

      if(data.bio === null){
        userBio.textContent= 'This profile has no bio.'
      }else{
        userBio.textContent = data.bio
      }

      repos.textContent = data.public_repos
      followers.textContent = data.followers
      following.textContent =data.following
      
      if(data.location === null){
        locationDisplay.textContent = 'Not available'
        document.querySelector('.location').classList.add('notAvailable')
      }else{
        locationDisplay.textContent = data.location
        document.querySelector('.location').classList.remove('notAvailable')
      }

      if(data.blog === ''){
        blogLink.textContent = 'Not available'
        document.querySelector('.blog').classList.add('notAvailable')

      }else{
        blogLink.textContent = data.blog
        blogLink.href = data.blog
        document.querySelector('.blog').classList.remove('notAvailable')
      }

      if(data.twitter_username === null){
        twitter.textContent = 'Not available'
        document.querySelector('.twitter').classList.add('notAvailable')

      }else{
        twitter.textContent = data.twitter_username
        document.querySelector('.twitter').classList.remove('notAvailable')
      }

      if(data.company === null){
        companyName.textContent = 'Not available'
        document.querySelector('.company').classList.add('notAvailable')

      }else{
        companyName.textContent = data.company
        document.querySelector('.company').classList.remove('notAvailable')
      }

   
}


form.addEventListener('submit',e=>{
    e.preventDefault()
    
    user = searchInput;
    getUserData(searchInput.value)
    searchInput.value =''

})


document.getElementById('searchInput').addEventListener('click',()=>{
  errorMessage.textContent = ''
  searchInput.style.width='100%'
})


theme.addEventListener('click',()=>{
  document.body.classList.toggle('darkTheme')
  document.body.style.transition = '1s'
  userCard.style.transition = '1s'
  if(document.body.classList.contains('darkTheme')){
    theme.innerHTML = `
    <p>Light</p>
    <img src="/assets/icon-sun.svg" alt="" class="themeIcon">
    `
    theme.classList.remove('theme')
    theme.classList.add('lightTheme')
  }else{
    theme.innerHTML =`
    <p>Dark</p>
    <img src="/assets/icon-moon.svg" alt="" class="themeIcon">
    `
    theme.classList.remove('lightTheme')
    theme.classList.add('theme')
    
  }
  

})

