

function delete_user() {

    return new Promise(function (resolve, reject) {
        fetch('http://localhost:3000/user/1', {
            method: 'DELETE',
        })
            .then((response) => resolve(response))
            .catch((err) => reject(err))
    })
}
const date_m = new Date(Date.now())
const post_user = {
    nombre: 'alfonso',
    email: 'alf@alf',
    password: '123',
    rol: 'admin',
    create_at: date_m
}
function create_user() {
    return new Promise(function (resolve, reject) {
        fetch('http://localhost:3000/user/post-user', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(post_user)
        })
            .then((result) => result)
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    })
}
async function call() {
    const data = await create_user()
    console.log(data)
}

call()


