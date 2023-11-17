/**
*@jest-environment jsdom
*/
import { login } from '../src/templates/login';
// import { loginGoogle } from '../src/lib/auth';

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
});
