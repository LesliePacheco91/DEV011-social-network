// <------------------------ Importación de funciones para testear -------------------------------->

import { newUser } from '../src/templates/newUser';

describe('newUser', () => {
  it('debería ser una función', () => {
    expect(typeof newUser).toBe('function');
  });
});
