"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _userController = require('../controllers/userController'); var _userController2 = _interopRequireDefault(_userController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// n deveria existir exemplo de CRUD
// router.get('/', UserController.index); // Lista usuários
// router.get('/:id', UserController.show); // Lista usuário

router.post('/', _userController2.default.store);
router.put('/', _loginRequired2.default, _userController2.default.update);
router.delete('/', _loginRequired2.default, _userController2.default.delete);

exports. default = router;
