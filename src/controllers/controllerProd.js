const knex = require('../database/index');

module.exports={

    //Consulta de produtos

    async prodGeral (req,res){
        const result = await knex('produtos');
        return res.json(result);
    },

    //Post

    async prodCreat (req,res){
        const {nome} = req.body;
        const {descri} = req.body;
        const {fabricante} = req.body;
        const {qtda} = req.body;
        const {preco} = req.body;
        const {custo} = req.body;
        await knex ('produtos').insert({
            nome,
            descri,
            fabricante,
            qtda,
            preco,
            custo,
        })
        return res.status(201).send(
            {
                msg:'Cadastro efetuado com sucesso!!!'
            }
        );
    },

    //Put

    async prodUpdate (req,res){
        const {cod} = req.params;
        const {nome} = req.body;
        const {descri} = req.body;
        const {fabricante} = req.body;
        const {qtda} = req.body;
        const {preco} = req.body;
        const {custo} = req.body;
        await knex ('produtos').update({
            nome,
            descri,
            fabricante,
            qtda,
            preco,
            custo,
        }).where({ codpro });
        return res.status(201).send(
            {
                msg:'Alteração efetuada com sucesso!!!'
            }
        );
    },
    async prodDelete(req, res){
        const {codpro} = req.params;
        await knex('produtos')
                .where({ codpro })
                .del();
        return res.status(201).send(
            {
                msg:"Registro deletado com sucesso!!"
            }
        );
    },
}