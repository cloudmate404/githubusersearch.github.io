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
    // if(data.name === null){
    //     return  data.login
    // } else{
    //     return data.name
    // }
   
    document.body.innerHTML=`
    <div class="container">
    <div class="header">
      <h1 class="headerText">devFinder</h1>
      <i class="theme"><span>Dark</span><img src="./assets/icon-moon.svg" alt=""></i>
    </div>
    <form class="form"  id="form">
      <img src="./assets/icon-search.svg" alt="" class="searchIcon">
      <input type="text" placeholder="Search GitHub username…" name="search" id="searchInput">
      <button type="submit" id="button" >Search</i></button>
    </form>
    <div class="userCard">
      <div class="userHeader">
        <img src="https://avatars.githubusercontent.com/u/583231?v=4" alt="" class="userImage">
        <div class="userInfo">
          <div class="userName">
            <h1>the Octocat</h1>
            <p>${data.login}</p>
          </div>
          <p class="date">Joined 25 Jan 2011</p>
        </div>
        
      </div>

      <div class="userRest">

        <p class="userBio">This profile has no bio </p>

        <div class="socialInfos">
          <div class="repos">
            <p class="socialTitle">Repos</p>
            <p class="socialInfo">8</p>
          </div>
          <div class="followers">
            <p class="socialTitle">Followers</p>
            <p class="socialInfo">3938</p>
          </div>
          <div class="following">
            <p class="socialTitle">Following</p>
            <p class="socialInfo">9</p>
          </div>
        </div>

        <div class="socialLinks">
          <div class="location socialLink">
            <img src="./assets/icon-location.svg" alt="" class="socialIcon">
            <p class="socialLinksInfo">San Francisco</p>
          </div>
          <div class="twitter socialLink">
            <img src="./assets/icon-twitter.svg" alt="" class="socialIcon">
            <p class="socialLinksInfo">Not Available</p>
          </div>
          <div class="blog socialLink">
            <img src="./assets/icon-website.svg" alt="" class="socialIcon">
            <p class="socialLinksInfo">https://github.blog</p>
          </div>
          <div class="company socialLink">
            <img src="./assets/icon-company.svg" alt="" class="socialIcon">
            <p class="socialLinksInfo">@github</p>
          </div>
        </div>
      </div>  
      
    </div>
    
  </div>
    
    `
}


form.addEventListener('submit',e=>{
    e.preventDefault()
    console.log(searchInput.value)
    user = searchInput;
    getUserData(searchInput.value)

})

// async function getUsers(){
//     const res = await fetch(`https://api.github.com/users/${user}`)
//     const data = await res.json()
//         console.log(data)
// }

// getUsers(user)