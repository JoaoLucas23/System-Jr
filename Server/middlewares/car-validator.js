const {body} = require('express-validator');
const validate = require('./validate');

function getValidator(method) {
  switch (method) {
  case 'createCar': {
    return [
      body('model')
        .exists()
        .withMessage('Você deve inserir um modelo!')
        .notEmpty()
        .withMessage('O campo modelo não pode ficar vazio!'),
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
        .withMessage('O ano deve conter apenas numeros'),
      body('price')
        .exists()
        .withMessage('Você deve inserir um valor')
        .isFloat({gt: 0})
        .withMessage('O preço deve conter apenas números'),
      body('km')
        .exists()
        .withMessage('O campo de km atual deve ser preenchido')
        .isNumeric()
        .withMessage('A km atual conter apenas números'),
      body('description')
        .optional()
        .isAlphanumeric()
        .withMessage('As observações devem conter apenas letras e números'),
      body('condition')
        .exists()
        .withMessage('Voce deve enviar a condicao do produto!')
        .isIn(['novo', 'usado']),
    ];
  };
  case 'updateCar': {
    return [
      body('model')
        .optional()
        .isAlphanumeric('pt-BR', {ignore: ' '})
        .withMessage('O modelo só pode conter letras e números'),
      body('brand')
        .optional()
        .isAlpha('pt-BR', {ignore: ' '})
        .withMessage('A marca só pode conter letras'),
      body('color')
        .optional()
        .isAlpha('pt-BR', {ignore: ' '})
        .withMessage('A cor só pode conter letras'),
      body('image')
        .optional()
        .isURL()
        .withMessage('A imagem deve ser uma URL'),
      body('year')
        .optional()
        .isNumeric()
        .withMessage('O ano deve conter apenas numeros')
        .isLength({min: 4}, {max: 4})
        .withMessage('O ano deve ter 4 dígitos'),
      body('price')
        .optional()
        .isFloat({gt: 0})
        .withMessage('O preço deve conter apenas números'),
      body('km')
        .optional()
        .isNumeric()
        .withMessage('A km atual conter apenas números'),
      body('description')
        .optional()
        .isAlphanumeric()
        .withMessage('As observações devem conter apenas letras e números'),
      body('condition')
        .optional()
        .isIn(['novo', 'usado']),
    ];
  };
  }
}

function carValidate(method) {
  const validations = getValidator(method);
  return validate(validations);
}

module.exports = carValidate;
