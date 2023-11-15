/**
*@jest-environment jsdom
*/
import login from '../src/templates/login';
import * as auth from '../src/lib/auth';

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

describe('loginUser', () => {
  it('liginUser is a function', () => {
    expect(typeof login).toBe('function');
  });

  it('loginUser have a button login', () => {
    const DOM = document.createElement('div');
    DOM.append(login());
    const buttonid = DOM.querySelector('#buttonLogin');
    expect(buttonid).not.toBe(undefined);
  });

  it('loginUser have button return home', () => {
    const DOM = document.createElement('div');
    DOM.append(login());
    const buttonReturn = DOM.querySelector('#buttonRetur');
    expect(buttonReturn).not.toBe(undefined);
  });

  it('login whit google', () => {
    const DOM = document.createElement('div');
    DOM.append(login());
    const buttonGoogle = DOM.querySelector('#buttonLoginGoogle');
    expect(buttonGoogle).not.toBe(undefined);
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
  const buttoGoogle = DOM.querySelector('#loginWithGoogle');
  buttoGoogle.click();
  const data = await auth.loginGoogle('google.com');
  expect(data).toBe('se ha iniciado por google');
});
