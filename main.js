import { JogoDaForca, StatusJogo } from './src/jogoDaForca.js';
import { InterfaceTerminal } from './src/interfaceTerminal.js';

async function iniciarJogo() {
  console.clear();
  const palavra = await InterfaceTerminal.lerPalavraSecreta();
  const jogo = new JogoDaForca(palavra || 'JAVASCRIPT');
  await loopJogo(jogo);
}

function renderizarTela(jogo) {
  console.clear();
  console.log(
    InterfaceTerminal.formatar(
      jogo.exibirPalavra(),
      jogo.obterVidasRestantes(),
      jogo.obterStatus()
    )
  );
}

async function loopJogo(jogo) {
  while (jogo.obterStatus() === StatusJogo.JOGANDO) {
    renderizarTela(jogo);
    const letra = await InterfaceTerminal.lerLetra();
    if (letra) jogo.chutar(letra[0]);
  }

  renderizarTela(jogo);
}

iniciarJogo();
