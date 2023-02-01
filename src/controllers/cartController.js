const path = require('path');
const productRequest = require('../requests/productRequest');



const cartController = {
  index: async (req, res) => {
    let carts = req.session.cart || []; // recupera o carrinho da sessão ou cria um novo
    let productId = req.body;
    if (Object.keys(productId).length !== 0) {
      carts.push(productId);
      req.session.cart = carts;
    }
    try {
      res.render('carrinho', { carts: req.session.cart, req: req });
      console.log(carts) //ver se funcionou

    } catch (err) {
      res.send('Ocorreu um erro ao carregar os produtos');
    };

  },

  delete: async (req, res) => {
    let cart = req.session.cart;
    let itemId = req.params.id;
    let itemIndex = cart.findIndex((item) => item.id_games === itemId);
    if (itemIndex >= 0) {
      cart.splice(itemIndex, 1);
      req.session.cart = cart;
      res.redirect('/Cart');
    } else {
      res.send('Item não encontrado no carrinho');
    }
  },
  increment: async (req, res) => {
    let carts = req.session.cart || [];
    let productId = req.body.itemId;
    let itemIndex = carts.findIndex(item => item.id_games === productId);

    if (itemIndex !== -1) {
        if(carts[itemIndex].quantity == null){
            carts[itemIndex].quantity = 1;
        }else{
            carts[itemIndex].quantity++;
        }
      req.session.cart = carts;
    }
    try {
      res.redirect('/Cart');
    } catch (err) {
      res.send('Ocorreu um erro ao carregar os produtos');
    }
  },
  decrement: async (req, res) => {
    let carts = req.session.cart || [];
    let productId = req.body.itemId;
    let itemIndex = carts.findIndex(item => item.id_games === productId);

    if (itemIndex !== -1) {
      carts[itemIndex].quantity--;
      req.session.cart = carts;
    }
    try {
      res.redirect('/Cart');
    } catch (err) {
      res.send('Ocorreu um erro ao carregar os produtos');
    }
  }

};
    

    


module.exports = cartController;