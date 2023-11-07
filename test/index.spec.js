// <------------------------ Importación de funciones para testear -------------------------------->

import { muro } from '../src/templates/muro';

describe('muro es una funcion', () => {
  it('debería ser una función', () => {
    expect(typeof muro).toBe('function');
  });
});
