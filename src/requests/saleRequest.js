const axios = require('axios')
const def = require('./default')

const url = 'sale'

const saleRequest = {
    getSales: () => axios({
        ...def,
        method: 'get',
        url: `${url}`
    }),
    getSale: (id) => axios({
        ...def,
        method: 'get',
        url: `${url}/${id}`
    }),
    createSale: (sale) => axios({
        ...def,
        method: 'post',
        data: {
            ...sale
        },
        url: `${url}`
    }),
    editSale: (sale, id) => axios({
        ...def,
        method: 'put',
        data: {
            ...sale
        },
        url: `${url}/${id}`
    }),
    deleteSale: (id) => axios({
        ...def,
        method: 'delete',        
        url: `${url}/${id}`
    })
}

module.exports = saleRequest;