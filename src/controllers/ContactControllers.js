const path = require('path');
const ContactController = {
    index : (req, res) => {
        res.sendFile(path.join(__dirname, "../../public/html/contato.html"));
    
    }
}


module.exports = ContactController;