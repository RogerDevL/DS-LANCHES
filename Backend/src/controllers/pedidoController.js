
const pedidoService = require("../services/pedidoServices");

const pedidoController = {
    create: async (req, res) =>{
        try {

            const pedido = await pedidoService.create(req.body);
            // console.log(pedido)
            return res.status(200).json({msg:"Pedido criado com sucesso.", pedido})

        } catch (error) {
            return res.status(500).json({msg:"Contate o Roger."})
        }
    },
    update: async (req, res) =>{
        try {

            const pedido = await pedidoService.update(req.params.id, req.body);

            if(!pedido){
                return res.status(404).json({ msg:"Pedido não encontrado"});
            }
            return res.status(200).json({msg:"Pedido atualizado com sucesso!", pedido});


        } catch (error) {
            return res.status(500).json({msg:"Contate o Roger."})
        }
    },
    delete: async (req, res) =>{
        try {
            const pedido = await pedidoService.delete(req.params.id);
            if(!pedido){
                return res.status(404).json({ msg:"Pedido não encontrado"});
            }
            return res.status(200).json({msg:"Pedido deletado com sucesso!", pedido});
        } catch (error) {
            return res.status(500).json({msg:"Contate o Roger."})
        }
    },
    getAll: async (req, res) =>{
        try {
            console.log("dddddddddddddddddddddd");
            
            const pedido = await pedidoService.getAll();

            console.log(pedido)
            if(!pedido){
                return res.status(404).json({ msg:"Pedidos não encontrados"});
            }
            return res.status(200).json({msg:"Pedidos encontrados com sucesso!", pedido});
        } catch (error) {
            return res.status(500).json({msg:"Contate o Roger."})
        }
    },
    getOne: async (req, res)  =>{
        try {
            const pedido = await pedidoService.getById(req.params.id);

            if(!pedido){
                return res.status(404).json({ msg:"Pedido não encontrado"});
            }
             return res.status(200).json({msg:"Pedido encontrado:", pedido});

        } catch (error) {
            return res.status(500).json({msg:"Contate o Roger."})
        }
    }
}


module.exports = pedidoController;