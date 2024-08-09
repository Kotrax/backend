const knex = require('../database/index');

module.exports = {

    //Consulta 
    
    async cliGeral (req,res){
        try {
        const result = await knex('clientes');
        return res.json(result);
    } catch (error) 
       
    {
        return res.status(400).json({'error': error});
    } 
    },

    //Post

    async cliCreat (req,res){
        try {
        const {codcli} = req.params;
        const {nome} = req.body;
        const {email} = req.body;
        const {uf} = req.body;
        const {password} = req.body;
        const {level} = req.body;
        await knex ('clientes').insert({
            codcli,
            nome,
            email,
            uf,
            password,
            level,
        })
        return res.status(201).send(
            {
                msg:'Cadastro efetuado com sucesso!!!'
            }
        );
    } catch (error) 
    {
    return res.status(400).json({'error': error});
    }   
    },

    //Put

    async cliUpdate (req,res){
        
        const {codcli} = req.params;
        const {nome} = req.body;
        const {email} = req.body;
        const {uf} = req.body;
        const {password} = req.body;
        const {level} = req.body;
        await knex ('clientes').insert({
            nome,
            email,
            uf,
            password,
            level,
        }).where({ codcli });
        return res.status(201).send(
            {
                msg:'Alteração efetuada com sucesso!!!'
            }
        );
    },

    //Delete

    async cliDelete(req, res){
        
        const {codcli} = req.params;
        await knex('clientes')
                .where({ codcli })
                .del();
        return res.status(201).send(
            {
                msg:"Registro deletado com sucesso!!!!"
            }
        );
    },
}