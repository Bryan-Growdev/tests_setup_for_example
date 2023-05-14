// export class SomaUseCase {
//   execute(data: SomaDTO) {

//   }
// }

export class CalculadoraUseCase {
  execute(dto: CalculoDTO) {

    switch (dto.operacao) {

      case TipoOperacao.SOMA:
        return dto.num1 + dto.num2;

      case TipoOperacao.SUBTRACAO:
        return dto.num1 - dto.num2;

      case TipoOperacao.MULTIPLICACAO:
        return dto.num1 * dto.num2;

      case TipoOperacao.DIVISAO:
        return dto.num1 / dto.num2;

      default:
        throw new Error("Bah, deu erro!");
    }
  }
}

// const usecase = new SomaUseCase();
// usecase.execute({
//   num1: 4,
//   num2: 1,
// })

export interface SomaDTO {
  num1: number;
  num2: number;
}

export interface CalculoDTO {
  num1: number;
  num2: number;
  operacao: TipoOperacao;
}

export enum TipoOperacao {
  SOMA,
  SUBTRACAO,
  DIVISAO,
  MULTIPLICACAO
}