/**
*@jest-environment jsdom
*/
import { home } from '../src/templates/home';
// import * as auth from '../src/lib/auth';

describe('home', () => {
  it('home is a function', () => {
    expect(typeof home).toBe('function');
  });

  it('function button go login', () => {
    const DOM = document.createElement('div');
    const mock = jest.fn();
    DOM.append(home(mock));
    const buttonlogin = DOM.querySelector('#buttonLogin');
    buttonlogin.click();
    expect(mock).toHaveBeenLastCalledWith('/login');
  });

  it('function button go register', () => {
    const DOM = document.createElement('div');
    const mock = jest.fn();
    DOM.append(home(mock));
    const buttonlogin = DOM.querySelector('#buttonNewUser');
    buttonlogin.click();
    expect(mock).toHaveBeenLastCalledWith('/newUser');
  });
});
