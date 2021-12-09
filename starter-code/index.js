
let user = 'octocat'

async function getUsers(){
    const res = await fetch(`https://api.github.com/users/${user}`)
    const data = await res.json()
        console.log(data)
}

getUsers(user)