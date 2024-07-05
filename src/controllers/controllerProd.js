const knex = require('../database/index');

module.exports = {

    //Consulta

    async prodGeral (req,res){
       
        try {
            const result = await knex('produtos');
            return res.json(result);
        
        } catch (error) 
       
        {
            return res.status(400).json({'error': error});
        } 
    },
   
    async prodsNome(req, res){

        try {

            const { nome } = req.params;
            const result = await knex('produtos').where('nome','like','%'+ nome +'%');
            return res.json(result);
            
        } catch (error) 
       
        {
            return res.status(400).json({'error': error});
        }
    },

    //Post

    async prodCreat (req,res){
        try {
       
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
        } catch (error) 
        {
        return res.status(400).json({'error': error});
        }   
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

    //Delete

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