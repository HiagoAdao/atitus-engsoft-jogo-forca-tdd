import readlineModule from 'readline';
import { JogoDaForca, StatusJogo } from './src/jogoDaForca.js';
import { InterfaceTerminal } from './src/interfaceTerminal.js';

const readline = readlineModule.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function iniciarJogo() {
  console.clear();

  const palavra = await InterfaceTerminal.lerPalavraSecreta(readline);
  const jogo = new JogoDaForca(palavra || 'JAVASCRIPT');

  await loopJogo(jogo);
  readline.close();
}

async function loopJogo(jogo) {
  while (jogo.obterStatus() === StatusJogo.JOGANDO) {
    console.clear();
    console.log(InterfaceTerminal.formatar(
      jogo.exibirPalavra(),
      jogo.obterVidasRestantes(),
      jogo.obterStatus()
    ));

    const letra = await InterfaceTerminal.lerLetra(readline);
    if (letra) jogo.chutar(letra[0]);
  }

  console.clear();
  console.log(InterfaceTerminal.formatar(
    jogo.exibirPalavra(),
    jogo.obterVidasRestantes(),
    jogo.obterStatus()
  ));
}

iniciarJogo();
