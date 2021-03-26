import Validator from '../js/Validator';

it('Метод validateUserPhone() должен возвращать корректный номер телефона', () => {
  expect(new Validator('8 (927) 000-00-00').validateUserPhone()).toBe('+79270000000');
  expect(new Validator('+7 960 000 00 00').validateUserPhone()).toBe('+79600000000');
  expect(new Validator('+86 000 000 0000').validateUserPhone()).toBe('+860000000000');
});

it('Метод validateUserPhone() должен возвращать ошибку, если введен некорректный номер телефона', () => {
  const error = 'Вы ввели некорректный номер телефона!';
  expect(() => new Validator('8 (927) 000-00').validateUserPhone()).toThrowError(error);
  expect(() => new Validator('+7 960 000 00 00 55').validateUserPhone()).toThrowError(error);
});
