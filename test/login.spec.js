/**
*@jest-environment jsdom
*/

// <------------------------ Importación de funciones para testear -------------------------------->

import { login } from '../src/templates/login';
import * as auth from '../src/lib/auth';

// <------------------------ Test: Prueba que es una función -------------------------------->
// FALTA ESCRIBIR QUE HACE ESTE JEST.MOCK

jest.mock('../src/lib/auth.js', () => ({
  loginUser: jest.fn((email, password) => {
    if (email === 'lesliepacheco@gmail.com' && password === 'abc1234') {
      return Promise.resolve('se ha iniciado');
    }
    return Promise.reject(new Error('error'));
  }),
  loginGoogle: jest.fn((provider) => {
    if (provider) {
      return Promise.resolve('se ha iniciado por google');
    }
    return Promise.reject(new Error('error'));
  }),

}));

describe('Login', () => {
  it('newUser is a function', () => {
    expect(typeof login).toBe('function');
  });

  it('login have a buttom new session', () => {
    const DOM = document.createElement('div');
    DOM.append(login());
    const buttomid = DOM.querySelector('#buttonLogin');
    expect(buttomid).not.toBe(undefined);
  });

  it('login have buttom return home', () => {
    const DOM = document.createElement('div');
    DOM.append(login());
    const buttonReturn = DOM.querySelector('#buttomReturn');
    expect(buttonReturn).not.toBe(undefined);
  });

  it('login have buttom login with google', () => {
    const DOM = document.createElement('div');
    DOM.append(login());
    const buttoGoogle = DOM.querySelector('#loginWithGoogle');
    expect(buttoGoogle).not.toBe(undefined);
  });

  it('function buttom return home', () => {
    const DOM = document.createElement('div');
    const mock = jest.fn();
    DOM.append(login(mock));
    const buttonReturn = DOM.querySelector('#buttomReturn');
    buttonReturn.click();
    expect(mock).toHaveBeenLastCalledWith('/');
  });

  it('login form have element password', () => {
    const DOM = document.createElement('div');
    DOM.append(login());
    const elementPassword = DOM.querySelector('#inputPass');
    expect(elementPassword).toHaveProperty('type', 'password');
  });
});

test('valide accout login', async () => {
  const mock = jest.fn();
  const DOM = document.createElement('div');
  DOM.append(login(mock));
  const inputMail = DOM.querySelector('#idEmail');
  const inputPassword = DOM.querySelector('#inputPass');
  const button = DOM.querySelector('#buttonLogin');

  inputMail.value = 'lesliepacheco@gmail.com';
  inputPassword.value = 'abc1234';
  button.click();
  const data = await auth.loginUser(inputMail.value, inputPassword.value);
  expect(data).toBe('se ha iniciado');
});

test('new session with google', async () => {
  const mock = jest.fn();
  const DOM = document.createElement('div');
  DOM.append(login(mock));
  const buttoGoogle = DOM.querySelector('#buttonLoginGoogle');
  buttoGoogle.click();
  const data = await auth.loginGoogle('google.com');
  expect(data).toBe('se ha iniciado por google');
});
