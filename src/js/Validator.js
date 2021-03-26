export default class Validator {
  constructor(userPhone) {
    this.userPhone = userPhone;
  }

  validateUserPhone() {
    const regex = /\+|\d/g;
    const result = this.userPhone.match(regex).join('');
    if (result.length > 13 || result.length < 10) {
      throw new Error('Вы ввели некорректный номер телефона!');
    }
    if (result.length > 12) {
      return result;
    }
    return result.replace(/^8/, '+7');
  }
}
