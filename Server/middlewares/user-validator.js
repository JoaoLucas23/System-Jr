<<<<<<< HEAD
const {body, validationResult} = require('express-validator');
const validate = require('./validate');

function getValidations(method) {
  switch (method) {
  case 'login': {
    return [
      body('email')
        .exists()
        .withMessage('O campo de email deve estar preenchido!')
        .isEmail()
        .withMessage('O email inserido não é válido!'),
      body('password')
        .exists()
        .withMessage('Você deve digitar uma senha!')
        .notEmpty()
        .withMessage('O campo de senha deve estar preenchido!'),
    ];
  };
  case 'createUser': {
    return [
      body('namel')
        .exists()
        .withMessage('Você deve enviar um nome!')
        .isAlpha('pt-BR', {ignore: ' '})
        .withMessage('Seu nome só pode conter letras!'),
      body('email')
        .exists()
        .withMessage('O campo de email deve estar preenchido!')
        .isEmail()
        .withMessage('O email inserido não é válido!'),
      body('password')
        .exists()
        .withMessage('Você deve digitar uma senha!')
        .notEmpty()
        .withMessage('O campo de senha deve estar preenchido!'),
      body('image')
        .exists()
        .withMessage('O campo de imagem deve estar preenchido!')
        .isURL()
        .withMessage('A imagem deve ser uma URL'),
    ];
  };
  case 'updateUser': {
    return [
      body('namel')
        .optional()
        .isAlpha('pt-BR', {ignore: ' '})
        .withMessage('Seu nome só pode conter letras!'),
      body('email')
        .optional()
        .isEmail()
        .withMessage('O email inserido não é válido!'),
      body('image')
        .optional()
        .isURL()
        .withMessage('A imagem deve ser uma URL'),
    ];
  };
  }
}

function userValidate(method) {
  const validations = getValidations(method);
  return validate(validations);
}

module.exports = userValidate;
=======
const{body} = require('express-validator');

// CreateUser: name, email, user, password, iamge, phone, role
// Login: Email, password
//




function getValidations(method) {
    switch (method) {

    }
}
>>>>>>> 7427a997b112fbecd64de2b9b0aeafb613bc13e3
