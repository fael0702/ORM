const Itempedido = require('../models/itempedidoModels');
module.exports = {
    async index(req, res) {
        const itempedido = await Itempedido.findAll();
        return res.json(itempedido);
    },
    async store(req, res) {
        const { itp_produto, itp_quantidade, itp_valorunit, itp_valortotal, ped_codigo } = req.body;
        const itempedido = await Itempedido.create({ itp_produto, itp_quantidade, itp_valorunit, itp_valortotal, ped_codigo });
        return res.status(200).send({
            status: 1,
            message: "Usuário cadastrado com sucesso!!!",
            itempedido
        })
    },
    async update(req, res) {
        const { itp_produto } = req.body;
        const { codigo } = req.params;
        await Itempedido.update({
            itp_produto
        }, {
            where: {
                id: codigo
            }
        });
        return res.status(200).send({
            status: 1,
            message: "Registro atualizado com sucesso!!!",
        })
    },
    async delete(req, res) {
        const { codigo } = req.params;
        await Itempedido.destroy({
            where: {
                id: codigo
            }
        });
        return res.status(200).send({
            status: 1,
            message: "Registro excluido com sucesso!!!",
        })
    }
}