import chalk from 'chalk';
import boxen from 'boxen';
import { password, input } from '@inquirer/prompts';

export class InterfaceTerminal {
  static #ESTAGIOS_FORCA = [
    `
    +---+
    |   |
    O   |
   /|\\  |
   / \\  |
        |
  =========
    PERDEU!`,
    `
    +---+
    |   |
    O   |
   /|\\  |
   /    |
        |
  =========`,
    `
    +---+
    |   |
    O   |
   /|\\  |
        |
        |
  =========`,
    `
    +---+
    |   |
    O   |
   /|   |
        |
        |
  =========`,
    `
    +---+
    |   |
    O   |
    |   |
        |
        |
  =========`,
    `
    +---+
    |   |
    O   |
        |
        |
        |
  =========`,
    `
    +---+
    |   |
        |
        |
        |
        |
  =========`
  ];

  static formatar(palavra, vidas, status, painter = chalk) {
    const corVidas = vidas > 2 ? painter.green : painter.red;
    const forca = this.#ESTAGIOS_FORCA[vidas];

    const conteudo = [
      painter.yellow(forca),
      '',
      painter.cyan('Palavra: ') + painter.bold(palavra),
      '',
      corVidas(`Vidas: ${vidas}`),
      painter.magenta(`Status: ${status}`)
    ].join('\n');

    return boxen(conteudo, {
      padding: 1,
      margin: 1,
      borderStyle: 'double',
      borderColor: 'yellow',
      title: ' JOGO DA FORCA TDD ',
      titleAlignment: 'center'
    });
  }

  static async lerPalavraSecreta() {
    const palavra = await password({ message: 'Digita a palavra para o jogo:', mask: '*' });
    return palavra.toUpperCase();
  }

  static async lerLetra() {
    const letra = await input({ message: 'Digite uma letra: ' });
    return letra.toUpperCase();
  }
}
