const Montadora = require('../models/montadoraModels');
module.exports = {
    async index(req, res) {
        const montadora = await Montadora.findAll();
        return res.json(montadora);
    },
    async store(req, res) {
        const { mon_nomeautomovel, mon_quantidade, mon_dtpedido, mon_condpagto, mon_ativoinativo, mon_ordem } = req.body;
        const montadora = await Montadora.create({ mon_nomeautomovel, mon_quantidade, mon_dtpedido, mon_condpagto, mon_ativoinativo, mon_ordem });
        return res.status(200).send({
            status: 1,
            message: "Usuário cadastrado com sucesso!!!",
            montadora
        })
    },
    async update(req, res) {
        const {  mon_nomeautomovel } = req.body;
        const { codigo } = req.params;
        await Montadora.update({
            mon_nomeautomovel
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
        await Montadora.destroy({
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