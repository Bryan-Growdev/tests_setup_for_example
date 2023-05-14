// // import { soma } from '../src';

// // describe('Test 1 -', () => {
// //   test('Soma', () => {
// //     const num1 = 5;
// //     const num2 = 6;

// //     const result = soma(num1, num2);

// //     expect(result).toBe(11);
// //   });
// // });

// import { CalculadoraUseCase, CalculoDTO, TipoOperacao } from '../src/index';

// describe('CalculadoraUseCase - ', () => {
//   // const sut =
//   const db = '' as any;

//   beforeAll(async () => {
//     await db.init();
//     await db.createUser();
//   });

//   afterAll(async () => {
//     await db.deleteUser();
//   });

//   test('Deve retornar o valor correto da soma', () => {
//     const dto: CalculoDTO = {
//       num1: 3,
//       num2: 7,
//       operacao: TipoOperacao.SOMA,
//     };

//     const usecase = new CalculadoraUseCase();

//     const result = usecase.execute(dto);


//   });
// });