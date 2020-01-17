const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-tmwnu.mongodb.net/omnistack10?retryWrites=true&w=majority' , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
//vai ser vailido para todas as rotas da aplicação
app.use(cors());
app.use(express.json());
app.use(routes);
//Query params | usar no GET {Filtros, ordenação, Paginação}
//Route params | usar no DELETE E PUT {Identificar um recurso na alteração ou remoção}
//Body | usar no post ou put {Dados para criação ou alteração de um registro}




app.listen(3333);