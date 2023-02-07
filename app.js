const express = require("express");

const path = require('path');

const methodOverride = require('method-override');

const session = require('express-session');

const { body, validationResult } = require('express-validator');

const { access } = require("fs");

let app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride('_method')); 

app.use(session({
    secret:"kickAss999",
    resave:true,
    saveUninitialized:true
}))


//importação das rotas
const admRegister = require('./src/routes/routeAdmRegister');
const routeAbout = require("./src/routes/routeAbout");
const routeHome = require("./src/routes/routeHome");
const routeGames = require("./src/routes/routeGames");
const routeContact = require("./src/routes/routeContact");
const routeCart = require("./src/routes/routeCart");
const routeLogin = require("./src/routes/routeLogin");
const routeRegister = require('./src/routes/routeRegister');
const routeCloseSession = require('./src/routes/closeSession');
const routeSale = require('./src/routes/routeSale')
const routeError = require ("./src/routes/routeError")

//Rotas
app.use('/', admRegister);
app.use('/', routeAbout);
app.use('/', routeHome);
app.use('/', routeGames);
app.use('/', routeContact);
app.use('/', routeCart);
app.use('/', routeLogin);
app.use('/', routeRegister);
app.use('/', routeCloseSession);
app.use('/', routeSale);
app.use('/', routeError)
app.use(express.static(path.join(__dirname, '/public')));



app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');









app.listen(3333, () => {  // servidor para testes
    console.log("Servidor rodando na porta 3333")
})