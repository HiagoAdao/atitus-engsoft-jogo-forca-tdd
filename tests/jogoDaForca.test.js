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

  test('deve declarar derrota quando as vidas zerarem', () => {
    const jogo = new JogoDaForca('TDD', 1);
    jogo.chutar('Z');
    expect(jogo.obterStatus()).toBe(StatusJogo.PERDEU);
    expect(jogo.obterVidasRestantes()).toBe(0);
  });

  test('não deve reduzir vida se o jogador chutar uma letra repetida errada', () => {
    const jogo = new JogoDaForca('TDD', 5);
    jogo.chutar('Z');
    jogo.chutar('Z');
    expect(jogo.obterVidasRestantes()).toBe(4);
  });

  test('não deve permitir novos chutes após o jogo acabar', () => {
    const jogo = new JogoDaForca('OI', 1);
    jogo.chutar('Z');
    expect(jogo.obterStatus()).toBe(StatusJogo.PERDEU);
    jogo.chutar('O');
    expect(jogo.exibirPalavra()).toBe('_ _');
  });

  test('deve ignorar chutes inválidos (nulos ou não-strings)', () => {
    const jogo = new JogoDaForca('TESTE', 5);
    jogo.chutar(null);
    jogo.chutar(123);
    jogo.chutar(undefined);
    expect(jogo.obterVidasRestantes()).toBe(5);
  });
});
