/**
*@jest-environment jsdom
*/
import loginUser from '../src/templates/login';
import { loginGoogle } from '../src/lib/auth';

describe('loginUser', () => {
  it('liginUser is a function', () => {
    expect(typeof loginUser).toBe('function');
  });

  it('loginUser have a buttom login', () => {
    const DOM = document.createElement('div');
    DOM.append(loginUser());
    const buttomid = DOM.querySelector('#buttonLogin');
    expect(buttomid).not.toBe(undefined);
  });

  it('loginUser have buttom return home', () => {
    const DOM = document.createElement('div');
    DOM.append(loginUser());
    const buttonReturn = DOM.querySelector('#buttomRetur');
    expect(buttonReturn).not.toBe(undefined);
  });

  it('login whit google', () => {
    const DOM = document.createElement('div');
    DOM.append(loginGoogle());
    const buttonGoogle = DOM.querySelector('#buttonLoginGoogle');
    expect(buttonGoogle).not.toBe(undefined);
  });
});
