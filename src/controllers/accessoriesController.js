const path = require("path");
const fs = require('fs');

const accessoriesFilePath = path.join(__dirname, '../database/accessories.json');
const accessories = JSON.parse(fs.readFileSync(accessoriesFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



const accessoriesController = {
    index : (req, res) => {
        
        
        
        return  res.render('acessorios', {accessories});
    }
}


module.exports = accessoriesController;