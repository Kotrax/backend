const knex = require('../database/index')

module.exports = {
    async produto (req, res){
        try {
            const result = await knex('produtos');
            return res.json(result);
        
        } catch (error) {
            return res.status(400).json({'error': error});
        } 
    }, 

// Get

    async prodsNome(req, res){

        try {

            const { nome } = req.params;
            const result = await knex('produtos').where('nome','like','%'+ nome +'%');
            return res.json(result);
            
        } catch (error) {
            return res.status(400).json({'error': error});
        }
    },

// Post

    async cads (req,res){

        try{
        const { nome } =  req.body;
        const { descri } =  req.body;
        const { fabricante } =  req.body;
        const { qtda } =  req.body;
        const { preco } =  req.body;
        const { custo} =  req.body;
        await knex('produtos').insert({
            nome, 
            descri, 
            fabricante, 
            qtda, 
            preco, 
            custo
        });
        return res.status(200).send(
            {
                msg:'Não sei onde isso está indo'
            }
        );

    }
        catch (error){
            return res.status(400).json({'error': error})
        }

    },

// Put

    async updateProd (req, res){


        const { codpro } =  req.params;
        const { nome } =  req.body;
        const { descri } =  req.body;
        const { fabricante } =  req.body;
        const { qtda } =  req.body;
        const { preco } =  req.body;
        const { custo} =  req.body;

        await knex('produtos').update(
            {
                nome, 
                descri, 
                fabricante, 
                qtda, 
                preco, 
                custo
            }).where({ codpro });
        return res.status(201).send(
            {
                msg:'alteração bem sucedida. Hello Deleon <3  be careful with him, Callowey'
            }
        );
    }, 

// Delete

        async deleteProd(req, res){
            const { codpro } =  req.params;

            try{
                const response = await knex('compras').where({codpro});

                if (response.length!=0){
                    return res.status(400).send({msg:'Registro não pode ser deletado. Consta venda na tabela compras'});

                } else{
                    await knex('produtos').where({ codpro }).del();

                    return res.status(200).send(
                        {
                            msg:'My babies :('
                        }
                    );
                }

            } catch (error) {
                console.error(error);
                return res.status(500).send({msg: error})
            }
            }
 }

