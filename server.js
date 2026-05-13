import express from 'express';
import { JogoDaForca, StatusJogo } from './src/jogoDaForca.js';

const app = express();
app.use(express.json());

let jogo = new JogoDaForca('JAVASCRIPT');

app.get('/', (_req, res) => {
  res.json({
    palavra: jogo.exibirPalavra(),
    vidas: jogo.obterVidasRestantes(),
    status: jogo.obterStatus(),
  });
});

app.post('/chutar', (req, res) => {
  const { letra } = req.body;
  if (!letra) return res.status(400).json({ erro: 'Letra obrigatória' });
  jogo.chutar(letra[0].toUpperCase());
  res.json({
    palavra: jogo.exibirPalavra(),
    vidas: jogo.obterVidasRestantes(),
    status: jogo.obterStatus(),
  });
});

app.post('/reiniciar', (_req, res) => {
  jogo = new JogoDaForca('JAVASCRIPT');
  res.json({ mensagem: 'Jogo reiniciado', status: StatusJogo.JOGANDO });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
