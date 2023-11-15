/**
*@jest-environment jsdom
*/
import { login } from '../src/templates/login';

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
