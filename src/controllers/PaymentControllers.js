const path = require('path');
const PaymentController = {
    index : (req, res) => {
        res.sendFile(path.join(__dirname, "../../public/html/pagamento.html"));
    
    }
}

module.exports = PaymentController;