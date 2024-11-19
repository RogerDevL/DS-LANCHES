const Pedido = require("../models/Pedido");

const pedidoService = {
  create: async (pedido) => {
    try {
      // console.log(pedido)
      return await Pedido.create(pedido);
    } catch (error) {
      // console.error(error);
      throw error("Ocorreu um erro ao criar pedido.");
    }
  },

  update: async (id, pedidoToUpdate) => {
    try {
      const pedido = await Pedido.findByPk(id);

      if (!pedido) {
        return null;
      }

      await pedido.update(pedidoToUpdate); // update atualizar
      await pedido.save();
      return pedido;
    } catch (error) {
      throw error("Ocorreu um erro ao criar admin.");
    }
  },
  getById: async (id) => {
    try {
      const pedido = await Pedido.findByPk(id);

      if (!pedido) {
        return null;
      }
      return pedido;
    } catch (error) {
      throw error("Ocorreu um erro ao buscar pedido.");
    }
  },
  getAll: async () => {
    try {
      const pedido = await Pedido.findAll();
      console.log(pedido);
      if (!pedido) {
        return null;
      }

      return pedido;
    } catch (error) {
      throw error("Ocorreu um erro ao buscar todos.");
    }
  },
  delete: async (id) => {
    try {
      const pedido = await Pedido.findByPk(id);
      if (!pedido) {
        return null;
      }
      await pedido.destroy();
      return pedido;
    } catch (error) {
      throw error("Ocorreu um erro ao deletar pedido.");
    }
  },
};

module.exports = pedidoService;
