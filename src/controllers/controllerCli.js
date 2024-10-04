const knex = require('../database/index')

module.exports = {

// Get

    async cliente (req, res){
        const result = await knex('clientes');
        return res.json(result);
    }, 
    
// Post

    async cads (req, res){
        const { nome } =  req.body;
        const { email } =  req.body;
        const { uf } =  req.body;
        const { password } =  req.body;
        const { level } =  req.body;
        await knex('clientes').insert({

            nome, 
            email, 
            uf, 
            password, 
            level,
            
        });
        return res.status(200).send(
            {
                msg:'Testando'
            }
        );
    },

// Put

    async updateCli(req, res) {
        const { codcli } = req.params;
        const { nome } = req.body;
        const { email } = req.body;
        const { uf } = req.body;
        const { password } = req.body;
        const { level } = req.body;
      
        await knex('clientes').update({
            nome,
            email,
            uf,
            password,
            level,
          })
         .where({ codcli }); // Pass an object with the column name and value
      
        return res.status(201).send({ // Use 200 OK instead of 201 Created
          msg: 'Cuida desse menino, Lex'
        });
    }, 

// Delete

        async deleteCli(req, res){
            const { codcli } =  req.params;

            await knex('clientes').where({ codcli }).del();

        return res.status(201).send(
            {
                msg:'My babies :('
            }
        );
    }

}

