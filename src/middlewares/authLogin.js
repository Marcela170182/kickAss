function authLogin(req, res, next){
    if(typeof(req.session.user) != "undefined"){
       return next()
    }else{
        res.send("Você precisa estar logado para acessar esta página!")
    }
}

module.exports = authLogin;