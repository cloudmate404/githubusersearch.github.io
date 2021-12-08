
async function getUsers(){
    const res = await fetch('https://api.github.com/users/cloudmate404')
    const data = await res.json()
        console.log(data)
}

getUsers()