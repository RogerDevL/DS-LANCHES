const bcrypt = require("bcryptjs/dist/bcrypt");
const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const adminService = require("../services/adminService");


const adminController ={
    login: async (req, res) => {
        try {
          const { nome, senha } = req.body;
    
          const admin = await Admin.findOne({ where: { nome } });
    
          if (!admin) {
            return res.status(400).json({
              msg: "Nome ou senha incorretos",
            });
          }
    
          const isValida = await bcrypt.compare(senha, admin.senha);
          if (!isValida) {
            return res.status(400).json({
              msg: "Email ou senha incorretos",
            });
          }
    
          const token = jwt.sign(
            { nome: admin.nome, senha: admin.senha },
            process.env.SECRET,
            { expiresIn: "1h" }
          );
    
          return res.status(200).json({
            msg: "Login realizado",
            token,
          });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ msg: "Acione o suporte" });
        }
      },
      create: async (req, res) =>{
        try {
            const admin = await adminService.create(req.body);
            return res.status(200).json({msg:"Admin criado", admin});

        } catch (error) {
            return res.status(500).json({msg:"Contate o Roger."})
        }
      },
      delete: async (req, res) =>{
        try {
            const admin = await adminService.delete(req.params.id);
            if(!admin){
                return res.status(404).json({ msg:"Admin não encontrado"});
            }
            return res.status(200).json({msg:"Admin deletado com sucesso!", admin});
        } catch (error) {
          console.log(error)
            return res.status(500).json({msg:"Contate o Roger."})
        }
    },
}

module.exports = adminController;