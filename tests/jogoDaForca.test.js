import { JogoDaForca, StatusJogo } from '../src/jogoDaForca.js';

describe('Jogo da Forca (Lógica)', () => {
  test('deve iniciar exibindo traços para a palavra oculta', () => {
    const jogo = new JogoDaForca('ABACAXI');
    expect(jogo.exibirPalavra()).toBe('_ _ _ _ _ _ _');
  });

  test('deve revelar a letra correta quando o jogador chutar corretamente', () => {
    const jogo = new JogoDaForca('TDD');
    jogo.chutar('T');
    expect(jogo.exibirPalavra()).toBe('T _ _');
  });

  test('deve reduzir as vidas quando o jogador errar o chute', () => {
    const jogo = new JogoDaForca('TDD', 5);
    jogo.chutar('Z');
    expect(jogo.obterVidasRestantes()).toBe(4);
  });

  test('deve declarar vitória quando todas as letras forem reveladas', () => {
    const jogo = new JogoDaForca('OI');
    jogo.chutar('O');
    jogo.chutar('I');
    expect(jogo.obterStatus()).toBe(StatusJogo.VENCEU);
  });
});
