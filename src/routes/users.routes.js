const express = require('express');
const router = express.Router();
const multer = require('multer');

const { storage } = require('../config/upload');

const UserController = require('../controllers/UserController');

// Inicialização do multer com as configuração de storage
const upload = multer({ storage });

// ===================================
//* Rota para listar todos os usuários
// ===================================
router.get('/', UserController.index);

// =============================
//* Rota para mostrar um usuário
// =============================
router.get('/show/:id', UserController.show);

// ====================================================
//* Rota para mostrar formulário de cadastro de usuário
// ====================================================
router.get('/create', UserController.createForm);

// ==================================================
//* Rota para mostrar formulário de edição de usuário
// ==================================================
router.get('/edit/:id', UserController.editForm);

// ===========================
//* Rota para criar um usuário
// ===========================
router.post('/', upload.single('avatar'), UserController.create);

// ===============================
//* Rota para atualizar um usuário
// ===============================
router.put('/:id', upload.single('avatar'), UserController.update);

// =============================
//* Rota para deletar um usuário
// =============================
router.delete('/:id', UserController.delete);

module.exports = router;