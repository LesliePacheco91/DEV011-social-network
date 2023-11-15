/**
*@jest-environment jsdom
*/
import { login } from '../src/templates/login';

describe('loginUser', () => {
  it('liginUser is a function', () => {
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
    const buttonReturn = DOM.querySelector('#buttomRetur');
    expect(buttonReturn).not.toBe(undefined);
  });

  it('login whit google', () => {
    const DOM = document.createElement('div');
    DOM.append(login());
    const buttonGoogle = DOM.querySelector('#buttonLoginGoogle');
    expect(buttonGoogle).not.toBe(undefined);
  });
});
