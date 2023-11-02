/**
*@jest-environment jsdom
*/

// <------------------------ Importación de funciones para testear -------------------------------->

import { newUser } from '../src/templates/newUser';
import * as auth from '../src/lib/auth';

// <------------------------ Test: Prueba que es una función -------------------------------->
// FALTA ESCRIBIR QUE HACE ESTE JEST.MOCK
jest.mock('../src/lib/auth.js', () => ({
  registerNewUser: jest.fn((email, password) => {
    if (email === 'lesliepacheco@gmail.com' && password === 'abc1234') {
      return Promise.resolve('se ha registrado');
    }
    return Promise.reject(new Error('error de registro'));
  }),
  registerGoogle: jest.fn((provider) => {
    // if (provider === 'google.com') { preguntar en dudas rápidas
    if (provider) {
      return Promise.resolve('se ha registrado por google');
    }
    return Promise.reject(new Error('error de registro por google'));
  }),
}));

describe('newUser', () => {
  it('newUser is a function', () => {
    expect(typeof newUser).toBe('function');
  });

  it('newUser have a buttom new register', () => {
    const DOM = document.createElement('div');
    DOM.append(newUser());
    const buttomid = DOM.querySelector('#buttonRegister');
    expect(buttomid).not.toBe(undefined);
  });

  it('newUser have buttom return home', () => {
    const DOM = document.createElement('div');
    DOM.append(newUser());
    const buttonReturn = DOM.querySelector('#buttomReturn');
    expect(buttonReturn).not.toBe(undefined);
  });
  it('function buttom return home', () => {
    const DOM = document.createElement('div');
    const mock = jest.fn();
    DOM.append(newUser(mock));
    const buttonReturn = DOM.querySelector('#buttomReturn');
    buttonReturn.click();
    expect(mock).toHaveBeenLastCalledWith('/');
  });

  it('newUser have buttom register with google', () => {
    const DOM = document.createElement('div');
    DOM.append(newUser());
    const buttoGoogle = DOM.querySelector('#registerGoogle');
    expect(buttoGoogle).not.toBe(undefined);
  });

  it('newUser form have element password', () => {
    const DOM = document.createElement('div');
    DOM.append(newUser());
    const elementPassword = DOM.querySelector('#form-pass');
    expect(elementPassword).toHaveProperty('type', 'password');
  });
});

// <------------------------ Test:  -------------------------------->

test('valide accout register', async () => {
  const mock = jest.fn();
  const DOM = document.createElement('div');
  DOM.append(newUser(mock));
  const inputMail = DOM.querySelector('#idEmail');
  const inputPassword = DOM.querySelector('#form-pass');
  const buttom = DOM.querySelector('#buttonUser');
  inputMail.value = 'lesliepacheco@gmail.com';
  inputPassword.value = 'abc1234';
  buttom.click();
  const data = await auth.registerNewUser(inputMail.value, inputPassword.value);
  expect(data).toBe('se ha registrado');
});

test('Validar registro correcto por google', async () => {
  const mock = jest.fn();
  const DOM = document.createElement('div');
  DOM.append(newUser(mock));
  const buttoGoogle = DOM.querySelector('#buttonRegisterGoogle');
  buttoGoogle.click();
  const data = await auth.registerGoogle('google.com');
  expect(data).toBe('se ha registrado por google');
});
