const axios = require('axios')
const def = require('./default')

const url = 'contact'

const contactRequest = {
    getContacts: () => axios({
        ...def,
        method: 'get',
        url: `${url}`
    }),
    getContact: (id) => axios({
        ...def,
        method: 'get',
        url: `${url}/${id}`
    }),
    createContact: (contact) => axios({
        ...def,
        method: 'post',
        data: {
            ...contact
        },
        url: `${url}`
    }),
    deleteContact: (id) => axios({
        ...def,
        method: 'delete',        
        url: `${url}/${id}`
    })
}

module.exports = contactRequest;