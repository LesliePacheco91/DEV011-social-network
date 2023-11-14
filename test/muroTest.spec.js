/**
*@jest-environment jsdom
*/

import { muro } from '../src/templates/muro';
import * as auth from '../src/lib/auth';

jest.mock('../src/lib/auth.js', () => ({

  createNewPost: jest.fn((img, nameRest, loc, assm, clear, pri, categ, like, user) => {
    if (img !== null && nameRest !== null && loc !== null && assm !== null && clear !== null && pri !== null && categ !== null && like !== null && user !== null) {
      return true;
    }
    return false;
  }),

  UpdatePost: jest.fn((id, nombreRest, locali, Calfic, Limpieza, precio, categoria) => {
    if (id !== null && nombreRest !== null && locali !== null && Calfic !== null && Limpieza !== null && precio !== null && categoria !== null) {
      return true;
    }
    return false;
  }),

  /* paintRealTtime: jest.fin((querySnapshot) => {
    if (querySnapshot !== null) {
      return querySnapshot;
    }

    return false;
  }), */

}));

describe('muro', () => {
  it('muro is a function', () => {
    expect(typeof muro).toBe('function');
  });

  it('muro have buttom open modal', () => {
    const DOM = document.createElement('div');
    DOM.append(muro());
    const buttonModal = DOM.querySelector('.buttonPost');
    expect(buttonModal).not.toBe(undefined);
  });

  it('muro have buttom close modal', () => {
    const DOM = document.createElement('div');
    DOM.append(muro());
    const buttonCloseModal = DOM.querySelector('.buttonCloseMdl');
    expect(buttonCloseModal).not.toBe(undefined);
  });

  it('muro have buttom open modal update post', () => {
    const DOM = document.createElement('div');
    DOM.append(muro());
    const buttonModal = DOM.querySelector('.buttonUpdate');
    expect(buttonModal).not.toBe(undefined);
  });

  it('muro have buttom close modal update post', () => {
    const DOM = document.createElement('div');
    DOM.append(muro());
    const buttonCloseModalUpdate = DOM.querySelector('#butttonCloseMdlUpdate');
    expect(buttonCloseModalUpdate).not.toBe(undefined);
  });

  it('muro have buttom save post', () => {
    const DOM = document.createElement('div');
    DOM.append(muro());
    const buttonCloseModalUpdate = DOM.querySelector('#idregisterPost');
    expect(buttonCloseModalUpdate).not.toBe(undefined);
  });
});

test('delete post', async () => {
  const mock = jest.fn();
  const DOM = document.createElement('div');
  DOM.append(muro(mock));
  const button = DOM.querySelector('#buttonUser');
  const idpost = 'sfghh';
  button.click();
  const data = await auth.deletePost(idpost);
  expect(data).toBe(true);
});

test('Register new post', async () => {
  const DOM = document.createElement('div');
  DOM.append(muro());

  const imagePost = DOM.querySelector('#idImgPost');
  const namePost = DOM.querySelector('#idnameRest');
  const loc = DOM.querySelector('#idlocation');
  const assm = DOM.querySelector('#idassment');
  const clear = DOM.querySelector('#idclear');
  const pri = DOM.querySelector('#idprice');
  const categ = DOM.querySelector('#idcategory');
  const like = DOM.querySelector('#idLike');
  const idUser = DOM.querySelector('#idUser');

  imagePost.value = 'imagenDeRestaurant.jpg';
  namePost.value = 'taqueria el taco loco';
  loc.value = 'calle 34';
  assm.value = '5';
  clear.value = '5';
  pri.value = 'Regular';
  categ.value = 'Gourmet';
  like.value = '1';
  idUser.value = 'id12345';

  const data = await auth.createNewPost(imagePost.value, namePost.value, loc.value, assm.value, clear.value, pri.value, categ.value, like.value, idUser.value);
  expect(data).toBe(true);
});

test('Update post', async () => {
  const DOM = document.createElement('div');
  DOM.append(muro());
  const idPost = DOM.querySelector('#idpost');
  const namePost = DOM.querySelector('#idnameRest');
  const loc = DOM.querySelector('#idlocation');
  const assm = DOM.querySelector('#idassment');
  const clear = DOM.querySelector('#idclear');
  const pri = DOM.querySelector('#idprice');
  const categ = DOM.querySelector('#idcategory');

  idPost.value = 'abv1234';
  namePost.value = 'NombreActualizado';
  loc.value = 'calle 34 Actualizado';
  assm.value = '5';
  clear.value = '5';
  pri.value = 'Regular';
  categ.value = 'Gourmet';

  const data = await auth.UpdatePost(idPost.value, namePost.value, loc.value, assm.value, clear.value, pri.value, categ.value);
  expect(data).toBe(true);
});
