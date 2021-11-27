const Pedido = require('../models/pedidoModels');
module.exports = {
    async index(req, res) {
        const pedido = await Pedido.findAll();
        return res.json(pedido);
    },
    async store(req, res) {
        const { ped_nomecliente, ped_dtpedido, ped_condpagto, ped_ativoinativo, ped_ordem } = req.body; 
        const pedido = await Pedido.create({ ped_nomecliente, ped_dtpedido, ped_condpagto, ped_ativoinativo, ped_ordem });
        return res.status(200).send({
            status: 1,
            message: "Usuário cadastrado com sucesso!!!",
            pedido
        })
    },
    async update(req, res) {
        const { ped_nomecliente } = req.body;
        const { codigo } = req.params; 
        await Pedido.update({ ped_nomecliente }, { 
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
        await Pedido.destroy({
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