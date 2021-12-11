const form = document.getElementById('form')
const searchInput = document.getElementById('searchInput')

let user 

function getUserData(user){
    fetch(`https://api.github.com/users/${user}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            renderData(data)
        })
    
}

function renderData(data){
      // let name = data.name
      // let login = data.login

      if(data.name === null){
          document.getElementById('name').textContent = data.login
      }else{
         document.getElementById('name').textContent = data.name
      }

      document.getElementById('login').textContent =  data.login
      document.getElementById('userImage').src = data.avatar_url
      document.getElementById('date').textContent =data.created_at

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
      }

      if(data.blog === ''){
        document.getElementById('blog').textContent = 'Not available'
        document.querySelector('.blog').classList.add('notAvailable')

      }else{
        document.getElementById('blog').textContent = data.blog
      }

      if(data.twitter_username === null){
        document.getElementById('twitter').textContent = 'Not available'
        document.querySelector('.twitter').classList.add('notAvailable')

      }else{
        document.getElementById('twitter').textContent = data.twitter_username
        // document.querySelector('.twitter').classList.remove('notAvailable')
      }

      if(data.company === null){
        document.getElementById('company').textContent = 'Not available'
        document.querySelector('.company').classList.add('notAvailable')

      }else{
        document.getElementById('company').textContent = data.company
      }

   
}


form.addEventListener('submit',e=>{
    e.preventDefault()
    console.log(searchInput.value)
    user = searchInput;
    getUserData(searchInput.value)
    searchInput.value =''

})

