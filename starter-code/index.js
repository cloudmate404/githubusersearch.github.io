const form = document.getElementById('form')
const searchInput = document.getElementById('searchInput')
const theme = document.getElementById('theme')
const userCard =document.getElementById('userCard')

let user 

// async function getUserData(user){
//   let res = await fetch(`https://api.github.com/users/${user}`)
//                       if(res.status == 200){
//                         document.getElementById('errorMessage').textContent = ''
//                         let data = await res.json()
//                         console.log(data)
//                         // return data
//                         renderData(data)
//                       } throw new Error(res.status)

//                       .catch(Error =>{
//                         document.getElementById('errorMessage').textContent = 'No result'
//                         document.getElementById('searchInput').placeholder =''
//                         document.getElementById('searchInput').style.width='25%'
//                       })
                      
//                     }
               

function getUserData(user){
    fetch(`https://api.github.com/users/${user}`)
        .then(res => {
          if(res.status == 200){
            document.getElementById('errorMessage').textContent = ''
            return res.json()
          }else{
            throw new Error(res.status)
          }
        })
        .then(data =>{
            console.log(data)
            renderData(data)
        })
        .catch(Error =>{
          document.getElementById('errorMessage').textContent = 'No result'
          document.getElementById('searchInput').placeholder =''
          document.getElementById('searchInput').style.width='25%'
        })
    
}

function renderData(data){
      const date = new Date(data.created_at)
      const createdDate = date.toDateString().slice(4,20)
      // let name = data.name
      // let login = data.login

      if(data.name === null){
          document.getElementById('name').textContent = data.login
      }else{
         document.getElementById('name').textContent = data.name
      }

      document.getElementById('login').textContent =  data.login
      document.getElementById('userImage').src = data.avatar_url
      document.getElementById('date').textContent =`Joined ${createdDate}`

      if(data.bio === null){
        document.getElementById('userBio').textContent= 'This profile has no bio.'
      }else{
        document.getElementById('userBio').textContent = data.bio
      }

      document.getElementById('repos').textContent = data.public_repos
      document.getElementById('followers').textContent = data.followers
      document.getElementById('following').textContent =data.following
      
      if(data.location === null){
        document.getElementById('location').textContent = 'Not available'
        document.querySelector('.location').classList.add('notAvailable')
      }else{
        document.getElementById('location').textContent = data.location
        document.querySelector('.location').classList.remove('notAvailable')
      }

      if(data.blog === ''){
        document.getElementById('blog').textContent = 'Not available'
        document.querySelector('.blog').classList.add('notAvailable')

      }else{
        document.getElementById('blog').textContent = data.blog
        document.querySelector('.blog').classList.remove('notAvailable')
      }

      if(data.twitter_username === null){
        document.getElementById('twitter').textContent = 'Not available'
        document.querySelector('.twitter').classList.add('notAvailable')

      }else{
        document.getElementById('twitter').textContent = data.twitter_username
        document.querySelector('.twitter').classList.remove('notAvailable')
      }

      if(data.company === null){
        document.getElementById('company').textContent = 'Not available'
        document.querySelector('.company').classList.add('notAvailable')

      }else{
        document.getElementById('company').textContent = data.company
        document.querySelector('.company').classList.remove('notAvailable')
      }

   
}


form.addEventListener('submit',e=>{
    e.preventDefault()
    console.log(searchInput.value)
    user = searchInput;
    getUserData(searchInput.value)
    searchInput.value =''

})


document.getElementById('searchInput').addEventListener('click',()=>{
  document.getElementById('errorMessage').textContent = ''
  document.getElementById('searchInput').style.width='100%'
})


theme.addEventListener('click',()=>{
  document.body.classList.toggle('darkTheme')
  document.body.style.transition = '1s'
  userCard.style.transition = '1s'
  if(document.body.classList.contains('darkTheme')){
    theme.innerHTML = `
    <p>Light</p>
    <img src="./assets/icon-sun.svg" alt="" class="themeIcon">
    `
  }else{
    theme.innerHTML =`
    <p>Dark</p>
    <img src="./assets/icon-moon.svg" alt="" class="themeIcon">
    `
  }
  

})

