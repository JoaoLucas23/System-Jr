const {body} = require('express-validator');
const validate = require('./validate');

function getValidator(method) {
  switch (method) {
  case 'createCar': {
    return [
      body('model')
        .exists()
        .withMessage('Você deve inserir um modelo!')
        .isAlphanumeric('pt-BR', {ignore: ' '})
        .withMessage('O modelo só pode conter letras e números'),
      body('brand')
        .exists()
        .withMessage('Você deve inserir uma marca!')
        .isAlpha('pt-BR', {ignore: ' '})
        .withMessage('A marca só pode conter letras'),
      body('color')
        .exists()
        .withMessage('Voce deve inserir uma cor')
        .isAlpha('pt-BR', {ignore: ' '})
        .withMessage('A cor só pode conter letras'),
      body('image')
        .exists()
        .withMessage('Você deve inserir uma imagem')
        .isURL()
        .withMessage('A imagem deve ser uma URL'),
      body('year')
        .exists()
        .withMessage('Você deve inserir um ano')
        .isNumeric()
        .withMessage('O ano deve conter apenas numeros')
        .isLength({min: 4}, {max: 4})
        .withMessage('O ano deve ter 4 dígitos'),
      body('price')
        .exists()
        .withMessage('Você deve inserir um valor')
        .isNumeric()
        .withMessage('O preço deve conter apenas números'),
      body('km')
        .exists()
        .withMessage('O campo de km atual deve ser preenchido')
        .isNumeric()
        .withMessage('A km atual conter apenas números'),
      body('obs')
        .optional()
        .isAlphanumeric()
        .withMessage('As observações devem conter apenas letras e números'),
    ];
  };
  case 'UpdateCar': {
    return [

    ];
  };
  }
}

function carValidate(method) {
  const validations = getValidator(method);
  return validate(validations);
}

module.exports = carValidate;
