export const StatusJogo = Object.freeze({
  JOGANDO: 'Jogando...',
  VENCEU: 'Venceu!',
  PERDEU: 'Perdeu!'
});

export class JogoDaForca {
  #palavra;
  #vidasRestantes;
  #palpites;

  constructor(palavra, vidas = 6) {
    this.#palavra = palavra.toUpperCase();
    this.#vidasRestantes = vidas;
    this.#palpites = new Set();
  }

  exibirPalavra() {
    return this.#palavra
      .split(' ')
      .map(palavra =>
        palavra
          .split('')
          .map(letra => (this.#palpites.has(letra) ? letra : '_'))
          .join(' ')
      )
      .join('   ');
  }

  chutar(letra) {
    if (this.obterStatus() !== StatusJogo.JOGANDO) return;
    if (!letra || typeof letra !== 'string') return;

    const palpite = letra.toUpperCase();
    if (this.#palpites.has(palpite)) return;
    
    this.#palpites.add(palpite);
    
    if (!this.#palavra.includes(palpite)) {
      this.#vidasRestantes--;
    }
  }

  obterVidasRestantes() {
    return this.#vidasRestantes;
  }

  obterStatus() {
    if (this.#verificarVitoria()) return StatusJogo.VENCEU;
    if (this.#vidasRestantes <= 0) return StatusJogo.PERDEU;
    return StatusJogo.JOGANDO;
  }

  #verificarVitoria() {
    return this.#palavra
      .split('')
      .every(char => char === ' ' || this.#palpites.has(char));
  }
}
