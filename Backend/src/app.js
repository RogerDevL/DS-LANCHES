require('dotenv').config();
const express = require('express'); 
const { sequelize } = require('./models/Pedido');
const router = require('./router/router');

const app = express();

app.use(express.json());


app.use('/api', router);


sequelize.authenticate()
    .then(()=>{
        console.log("Conexao com o banco de dados deu certo")
        sequelize.sync();
})
    .catch(err =>{
        console.log("Erro ao conectar no banco:", err)
});

const PORT = process.env.PORT || 3000;
// Listen => Ouvir
// Ouvindo na possivel ou na porta 3000;
app.listen(PORT, ()=>{
    console.log('-----------------------------');
    console.log(`Running on http://${PORT}`);
    console.log('-----------------------------');
});