/**
*@jest-environment jsdom
*/
import { login } from '../src/templates/login';
// import { loginGoogle } from '../src/lib/auth';
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
  it('loginUser is a function', () => {
    expect(typeof login).toBe('function');
  });

  it('loginUser have a buttom login', () => {
    const DOM = document.createElement('div');
    DOM.append(login());
    const buttomid = DOM.querySelector('#buttonLogin');
    expect(buttomid).not.toBe(undefined);
  });

  it('loginUser have buttom return home', () => {
    const DOM = document.createElement('div');
    DOM.append(login());
    const buttonReturn = DOM.querySelector('#buttonReturn');
    expect(buttonReturn).not.toBe(undefined);
  });

  it('login whit google', () => {
    const DOM = document.createElement('div');
    DOM.append(login());
    const buttonGoogle = DOM.querySelector('#buttonLoginGoogle');
    expect(buttonGoogle).not.toBe(undefined);
  });

  it('function buttom return home', () => {
    const DOM = document.createElement('div');
    const mock = jest.fn();
    DOM.append(login(mock));
    const buttonReturn = DOM.querySelector('#buttonReturn');
    buttonReturn.click();
    expect(mock).toHaveBeenLastCalledWith('/');
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
});
