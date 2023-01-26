const axios = require('axios')
const def = require('./default')

const url = 'accessorie'

const accessorieRequest = {
    getProducts: () => axios({
        ...def,
        method: 'get',
        url: `${url}`
    }),
    getProduct: (id) => axios({
        ...def,
        method: 'get',
        url: `${url}/${id}`
    }),
    createProduct: (product) => axios({
        ...def,
        method: 'post',
        data: {
            ...product
        },
        url: `${url}`
    }),
    editProduct: (product, id) => axios({
        ...def,
        method: 'put',
        data: {
            ...product
        },
        url: `${url}/${id}`
    }),
    deleteProduct: (id) => axios({
        ...def,
        method: 'delete',        
        url: `${url}/${id}`
    })
}

module.exports = accessorieRequest;