const{validationResult} = require ('express-validator');

function validate(validations){
    return function(re, res, next){
        for (const validations of validation){
            await validation.run(req);
        }
        const result = validationResult(req);
        if(!result.isEmpty(){
            return res.status(400).json(result.errors);
        }
        next();
    };
}

module.exports = validate;