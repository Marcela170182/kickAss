function authLogin(req, res, next){
    const error = "Você precisa estar logado para acessar esta página!"
   
    if(typeof(req.session.user) != "undefined"){
       return next()
    }else{
        res.render("error" , {error});
    }
}

module.exports = authLogin;