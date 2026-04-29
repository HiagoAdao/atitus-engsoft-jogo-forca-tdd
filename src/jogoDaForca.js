export const StatusJogo = Object.freeze({
  JOGANDO: 'Jogando...',
  VENCEU: 'Venceu!',
  PERDEU: 'Perdeu!'
});

export class JogoDaForca {
  constructor(palavra, vidas = 6) {
    this.palavra = palavra.toUpperCase();
    this.vidasRestantes = vidas;
    this.palpites = new Set();
  }

  exibirPalavra() {
    return this.palavra
      .split(' ')
      .map(palavra =>
        palavra
          .split('')
          .map(letra => (this.palpites.has(letra) ? letra : '_'))
          .join(' ')
      )
      .join('   ');
  }

  chutar(letra) {
    const palpite = letra.toUpperCase();
    if (this.palpites.has(palpite)) return;
    if (this.palavra.includes(palpite)) {
      this.palpites.add(palpite);
    } else {
      this.vidasRestantes--;
      this.palpites.add(palpite);
    }
  }

  obterVidasRestantes() {
    return this.vidasRestantes;
  }

  obterStatus() {
    const venceu = this.palavra
      .split('')
      .every(char => char === ' ' || this.palpites.has(char));

    if (venceu) return StatusJogo.VENCEU;
    if (this.vidasRestantes <= 0) return StatusJogo.PERDEU;
    return StatusJogo.JOGANDO;
  }
}
