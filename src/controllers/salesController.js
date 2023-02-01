const path = require('path');
const fs = require("fs");
const saleRequest = require('../requests/saleRequest');

const salesController = {
	list : (req, res) => {
		saleRequest.getSales().
		then(productsReturned =>{
		  products = productsReturned.data;
		  return  res.render('listSales', {products})
		})
		.catch(err => {
		  console.log('error');
		})
	},
	
	
	index:  (req, res) => {
        
       return res.render('products');
    
    },
    create : async (req, res) => {
      
    let successMsg = ("Compra realizada com sucesso!");
		
		let sale = {
        
        ...req.body,			
      }
      
      saleRequest.createSale(sale).
		then(productReturn => {			
			res.render('index' , {successMsg : successMsg})
		})
		.catch(error => {
			console.log(error);
		})
    
   
   },

   edit : (req, res) => {
    let id = req.params.id;
		let product;
		saleRequest.getSale(id)
		.then(productReturn => {
			product = productReturn.data;
			res.render('editProducts', {product})
		}
		)
		.catch(error => {
			console.log(error);
		})
   },
   update:  (req, res) => {
    	let id = req.params.id;
		let productEdit;
		
		saleRequest.getSale(id)
		.then(productReturn => {
			productEdit = productReturn.data;

			productEdit = {
			
				...req.body,		
			};

			return productEdit;
		})
		.then(productEdit => {
			saleRequest.editSale(productEdit, id)
			.then(edited => {
			return 	res.redirect('/listSale');
			})
		})
		.catch(error => {
			console.log(error);
		})
   },
   destroy : (req, res) => {
	let id = req.params.id
	saleRequest.deleteSale(id)
	.then(deleted => {
		return res.redirect('/listSale')
	})	
	.catch(error => {
		console.log(error);
	})	
}
}

module.exports = salesController;