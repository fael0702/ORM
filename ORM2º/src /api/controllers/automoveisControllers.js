const Automoveis = require('../models/automoveisModels');
module.exports = {
    async index(req, res) {
        const automoveis = await Pedido.findAll();
        return res.json(automoveis);
    },
    async store(req, res) {
        const { aut_descricao, aut_marca, aut_condpagto, aut_valor, aut_ano, mon_codigo } = req.body; 
        const automoveis = await Automoveis.create({ aut_descricao, aut_marca, aut_condpagto, aut_valor, aut_ano, mon_codigo });
        return res.status(200).send({
            status: 1,
            message: "Usuário cadastrado com sucesso!!!",
            automoveis
        })
    },
    async update(req, res) {
        const { aut_marca } = req.body;
        const { codigo } = req.params; 
        await Automoveis.update({ aut_marca }, { 
            where: {
            id: codigo
            }
        });
        return res.status(200).send({
            status: 1,
            message: "Usuário atualizado com sucesso!!!",
        })
    },
    async delete(req, res) {
        const { codigo } = req.params;
        await Automoveis.destroy({
            where: {
                id: codigo
            }
        });
        return res.status(200).send({
            status: 1,
            message: "Usuário excluido com sucesso!!!",
        })
    }
}