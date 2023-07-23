function get_user() {
    return new Promise(function (resolve, reject) {
        fetch('http://localhost:3000/user')
            .then((response) => response.json())
            .then((response) => resolve(response))
            .catch((err) => reject(err))
    })
}

function delete_user() {

    return new Promise(function (resolve, reject) {
        fetch('http://localhost:3000/user/1', {
            method: 'DELETE',
        })
            .then((response) => resolve(response))
            .catch((err) => reject(err))
    })
}
const post_user = {
    nombre: 'test-1',
    email: 'test@test-1',
    password: 'test_123',
    rol: 'test',
    create_at: new Date()
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


