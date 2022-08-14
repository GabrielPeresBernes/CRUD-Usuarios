const express = require('express');
const methodOverride = require('method-override');

const initialRoutes = require('./src/routes/initial.routes');
const usersRoutes = require('./src/routes/users.routes');

// Inicialização do express
const server = express();

// define o ejs como view engine
server.set('view engine', 'ejs');

// define o diretório de views
server.set('views', './src/views');

// define o diretório de arquivos estáticos (public)
server.use(express.static(__dirname + '/public'));

// permitir que o servidor use o método PUT e DELETE
server.use(methodOverride('_method'));

// permitir o uso do formulário multipart/form-data
server.use(express.urlencoded({extended: false}));

// rotas
server.use('/', initialRoutes);
server.use('/users', usersRoutes);

// inicialização do servidor
server.listen(3000, () => {
    console.log('Servidor inicializado na porta 3000');
});