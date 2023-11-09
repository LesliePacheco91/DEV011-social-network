/**
*@jest-environment jsdom
*/

import { muro } from '../src/templates/muro';
import * as auth from '../src/lib/auth';

jest.mock('../src/lib/auth.js', () => ({
  createNewPost: jest.fn((img, nameRest, loc, assm, clear, pri, categ, like, user) => {
    if (img === 'img.jpg' && nameRest === 'taqueria el taco loco' && loc === 'c. 34' && assm === 5 && clear === 5 && pri === 'regular' && categ === 'gourmet' && like === 0 && user === 'bascnyrr') {
      return true;
    }
    return false;
  }),
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
});

test('muro have funcion of viwe list post', async () => {
  const objeto = {
    pri: 'Regular', user: 'fVc4xmiZGrSx5e1Tt30zVQ6XCoX2', img: 'https://vsd.mx/wp-content/uploads/2023/08/Restaurantes-Mexicanos-en-Quere%CC%81taro-1.jpg', date: 1699496988998, nameRest: 'ejemplo', clear: '3', loc: 'c. 35 x 22 y 24 col centro', like: '0', assm: '5', categ: 'Vegano',
  };

  const mock = jest.fn();
  const DOM = document.createElement('div');
  DOM.append(muro(mock));
  // const list = DOM.querySelector('.card');
  const data = await auth.paintRealTtime(objeto);
  console.log(data);
  expect(data).toEqual(objeto);
});

/* test('Register post', async () => {
  const mock = jest.fn();
  const DOM = document.createElement('div');
  DOM.append(muro(mock));
  const imagePost = DOM.querySelector('#idImgPost');
  const namePost = DOM.querySelector('#nameRest');
  const loc = DOM.querySelector('#location');
  const assm = DOM.querySelector('#assment');
  const clear = DOM.querySelector('#clear');
  const pri = DOM.querySelector('#price');
  const categ = DOM.querySelector('#category');
  const like = DOM.querySelector('#idLike');
  const idUser = DOM.querySelector('#idUser');

  imagePost.value = 'img.jpg';
  namePost.value = 'taqueria el taco loc';
  loc.value = 'c. 34';
  assm.value = 5;
  clear.value = 5;
  pri.value = 'regular';
  categ.value = 'gourmet';
  like.value = 0;
  idUser.value = 'bascnyrr';

  const button = DOM.querySelector('#idregisterPost');
  button.click();
  const data = await auth.createNewPost(imagePost.value, namePost.value, loc.value, assm.value, clear.value, pri.value, categ.value, like.value, idUser.value);
  expect(data).toBe(true);
});
*/
