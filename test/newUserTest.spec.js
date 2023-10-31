import { newUser } from '../src/templates/newUser';
import * as auth from '../src/lib/auth';

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
    const buttoReturn = DOM.querySelector('#buttomReturn');
    expect(buttoReturn).not.toBe(undefined);
  });
  it('function buttom return home', () => {
    const DOM = document.createElement('div');
    const mock = jest.fn();
    DOM.append(newUser(mock));
    const buttoReturn = DOM.querySelector('#buttomReturn');
    buttoReturn.click();
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

describe('buton save', () => {
  test('Test of clic resgistes user', () => {
    jest.spyOn(auth, 'registerNewUser').mockImplementation(() => Promise.resolve('lesli23@gmail.com'));
    const DOM = document.createElement('div');
    DOM.append(newUser());
    const inputEmail = DOM.querySelector('#idEmail');
    const inputpass = DOM.querySelector('#form-pass');
    const buttonid = DOM.querySelector('#registerUser');
    inputEmail.value = 'lesli23@gmail.com';
    inputpass.value = 'abc1234';
    buttonid.click();
    expect(inputEmail.value).toBe('lesli23@gmail.com');
  // expect(auth.registerNewUser).toHaveBeenCalledTimes();
  });
});
