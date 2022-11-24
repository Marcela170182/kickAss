const path = require("path");
const fs = require('fs');


const readFile = () => {
    const content = fs.readFileSync('src/database/users.json', 'utf-8');
    return (JSON.parse(content));
}



const registerController = {
    index : (req, res) => {
        res.render('cadastro');
    },
    register : (req, res) => {
       
        const { name, email, cpf, password, phone,adress, number, cep } = req.body
        currentContent = readFile()
        currentContent.push({name, email, cpf, password, phone,adress, number, cep})
        fs.writeFileSync("src/database/users.json", JSON.stringify(currentContent), 'utf-8');
        

        //res.redirect("Nova Rota");
    
     
    }
}


module.exports = registerController;