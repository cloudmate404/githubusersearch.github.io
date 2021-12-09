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
      <img src="./assets/icon-search.svg" alt="">
      <input type="text" placeholder="Search.." name="search" id="searchInput">
      <button type="submit" >Search</i></button>
    </form>
    <div class="userCard">
      <div class="userHeader">
        <img src="./assets/favicon-32x32.png" alt="" class="userImage">
        <div class="userInfo">
          <div class="userName">
            <h1>${data.name}</h1>
            <p>${data.login}</p>
          </div>
          <p>Joined ${data.created_at}</p>
        </div>
        
      </div>

      <div class="userRest">

        <p class="userBio">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, at sequi? Rerum fugiat, tempora, ut harum sit laborum recusandae quas officia dolorem autem voluptatem at aperiam, eaque culpa ratione animi.</p>

        <div class="socialInfo">
          <div class="repos">
            <p class="socialTitle">Repos</p>
            <p class="socialInfo"></p>
          </div>
          <div class="followers">
            <p class="socialTitle">Followers</p>
            <p class="socialInfo"></p>
          </div>
          <div class="following">
            <p class="socialTitle">Following</p>
            <p class="socialInfo"></p>
          </div>
        </div>

        <div class="socialLinks">
          <div class="location">
            <img src="./assets/icon-location.svg" alt="" class="socialIcon">
            <p class="socialLinksInfo"></p>
          </div>
          <div class="twitter">
            <img src="./assets/icon-twitter.svg" alt="" class="socialIcon">
            <p class="socialLinksInfo"></p>
          </div>
          <div class="blog">
            <img src="./assets/icon-website.svg" alt="" class="socialIcon">
            <p class="socialLinksInfo"></p>
          </div>
          <div class="company">
            <img src="./assets/icon-company.svg" alt="" class="socialIcon">
            <p class="socialLinksInfo"></p>
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