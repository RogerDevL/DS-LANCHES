const validateAdmin = (req, res, next) => {
    const {nome, senha} = req.body;

    if(!nome || !senha){
        return res.status(400).json({
            msg:"Campos inválidos"
        })
    }

    next();
}

const validateAdminId = (req,res, next) =>{
    const {id} = req.params;

    if(!id || typeof id !== 'string'){
        return res.status(400).json({
            msg:"Parametro ID inválido."
        });
    }
}

module.exports = {validateAdmin, validateAdminId};