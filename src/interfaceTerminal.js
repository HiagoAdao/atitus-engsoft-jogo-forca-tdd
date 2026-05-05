import chalk from 'chalk';
import boxen from 'boxen';

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

  static async lerPalavraSecreta(readline) {
    readline._writeToOutput = (texto) => {
      if (readline.stdoutMuted && texto !== '\r\n' && texto !== '\n') {
        readline.output.write('*');
      } else if (!readline.stdoutMuted) {
        readline.output.write(texto);
      }
    };
    
    readline.stdoutMuted = true;
    const palavra = await readline.question('Digita a palavra para o jogo: ');
    readline.stdoutMuted = false;
    
    readline._writeToOutput = (texto) => readline.output.write(texto);
    console.log('');
    return palavra.toUpperCase();
  }

  static async lerLetra(readline) {
    return await readline.question('Digite uma letra: ');
  }
}
