const path = require('path');

const contactRequest = require('../requests/contactRequest');



const contactController = {
    index: (req, res) => {
        res.render('contato');

    },
    create: async (req, res) => {

        let successMsg = "Sua mensagem foi enviada, retornaremos o contato em até 3 dias"

        let contact = {

            ...req.body,
        }

        contactRequest.createContact(contact).
            then(contactReturn => {
                res.render('index', { successMsg: successMsg })
            })
            .catch(error => {
                if (error.code === 'ECONNREFUSED') {
                    return res.render('error', { error: 'Falha na comunicação com o servidor, por favor tente mais tarde!' });
                }
                return res.render('error', { error });
            })


    },
    admContact : async (req, res) => {
        contactRequest.getContacts().
      then(contactsReturned => {
        contacts = contactsReturned.data;
        return res.render('admContact', { contacts : contacts })
      })
      .catch(error => {
        if (error.code === 'ECONNREFUSED') {
          return res.render('error', { error: 'Falha na comunicação com o servidor, por favor tente mais tarde!' });
        }
        return res.render('error', { error });
      })

    },
    msgContact : async (req, res) => {
        let id = req.params.id;
		let contact;
		contactRequest.getContact(id)
		.then(contactReturn => {
			contact = contactReturn.data;
			res.render('msgContact', {contact : contact})
		}
		)
		.catch(error => {
            if (error.code === 'ECONNREFUSED') {
              return res.render('error', { error: 'Falha na comunicação com o servidor, por favor tente mais tarde!' });
            }
            return res.render('error', { error });
          })
        
    }
}


module.exports = contactController;




