import Validator from './src/js/Validator';

const validatePhone = new Validator('+86 000 000 0000');
console.log(validatePhone.validateUserPhone());
