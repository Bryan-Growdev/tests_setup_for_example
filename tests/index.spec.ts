// import { soma } from '../src';

// describe('Test 1 -', () => {
//   test('Soma', () => {
//     const num1 = 5;
//     const num2 = 6;

//     const result = soma(num1, num2);

//     expect(result).toBe(11);
//   });
// });

import { CalculadoraUseCase, CalculoDTO, TipoOperacao } from '../src/index';

describe('CalculadoraUseCase - ', () => {
  // const sut =

  test('Deve retornar o valor correto da soma', () => {
    const dto: CalculoDTO = {
      num1: 3,
      num2: 7,
      operacao: TipoOperacao.SOMA,
    };

    const usecase = new CalculadoraUseCase();

    const result = usecase.execute(dto);

    expect(result).toBe(10);
    // expect(result).toEqual(10);
    // expect(result).toBeLessThanOrEqual(10);
    // expect(result).toBeLessThanOrEqual(11);
    // expect(result).toBeGreaterThan(9);
    // expect(result).toBeGreaterThanOrEqual(10);
  });

  test('Deve fazer a subtração corretamente', () => {
    const dto: CalculoDTO = {
      num1: 3,
      num2: 7,
      operacao: TipoOperacao.SUBTRACAO,
    };

    const usecase = new CalculadoraUseCase();

    const result = usecase.execute(dto);

    expect(result).toBe(-4);
  });
});