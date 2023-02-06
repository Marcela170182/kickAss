const path = require('path');
const fs = require("fs");
const productRequest = require('../requests/productRequest');

const admRegisterController = {
	list : (req, res) => {
		productRequest.getProducts().
		then(productsReturned =>{
		  products = productsReturned.data;
		  return  res.render('admList', {products})
		})
		.catch(err => {
		  console.log('error');
		})
	},
	
	
	index:  (req, res) => {
        
       return res.render('admRegister');
    
    },
    create : async (req, res) => {
      
		let newProduct = {
        
			img : req.file.filename,
			title: req.body.title,
			price: req.body.price,
			stock: req.body.stock,
				
		  }
      
      productRequest.createProduct(newProduct).
		then(productReturn => {			
			res.redirect('/products')
		})
		.catch(error => {
			console.log(error);
		})
    
   
   },

   edit : (req, res) => {
    let id = req.params.id;
		let product;
		productRequest.getProduct(id)
		.then(productReturn => {
			product = productReturn.data;
			res.render('admEdit', {product})
		}
		)
		.catch(error => {
			console.log(error);
		})
   },
   update:  (req, res) => {
    	let id = req.params.id;
		let productEdit;
		
		productRequest.getProduct(id)
		.then(productReturn => {
			productEdit = productReturn.data;

			productEdit = {
			    
					img : req.file.filename,
					title: req.body.title,
					price: req.body.price,
					stock: req.body.stock,
										 
			};

			return productEdit;
		})
		.then(productEdit => {
			productRequest.editProduct(productEdit, id)
			.then(edited => {
			return 	res.redirect('/list');
			})
		})
		.catch(error => {
			console.log(error);
		})
   },
   destroy : (req, res) => {
	let id = req.params.id
	productRequest.deleteProduct(id)
	.then(deleted => {
		return res.redirect('/list')
	})	
	.catch(error => {
		console.log(error);
	})	
}
}

module.exports = admRegisterController;