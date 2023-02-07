const axios = require('axios')
const def = require('./default')

const url = 'usuario'

const userRequest = {
    getUser: () => axios({
        ...def,
        method: 'get',
        url: `${url}`
    }),
    createUser: (user) => axios({
        ...def,
        method: 'post',
        data: {
            ...user
        },
        url: `${url}`
    })

}   

module.exports = userRequest;