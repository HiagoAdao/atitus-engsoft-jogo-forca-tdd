# 🪢 Jogo da Forca — Desafio TDD

Desafio prático da disciplina de **Engenharia de Software** da Atitus Educação.

O objetivo é implementar a lógica do clássico Jogo da Forca utilizando o ciclo **Red → Green → Refactor** do TDD (Test-Driven Development).

---

## 🎯 Objetivo do Desafio

> "Escreva o teste primeiro. Deixe ele falhar. Depois faça-o passar."
> — Kent Beck

Você deverá implementar a classe `JogoDaForca` guiado pelos testes já escritos, **sem olhar a solução** e **sem escrever código antes do teste falhar**.

---

## 🗂️ Estrutura do Projeto

```
jogo-da-forca-tdd/
├── src/
│   ├── jogoDaForca.js        # ← Lógica do jogo (sua implementação)
│   └── interfaceTerminal.js  # ← Interface visual no terminal
├── tests/
│   ├── jogoDaForca.test.js   # ← Testes unitários da lógica
│   └── fronteiraExterna.test.js # ← Testes de fronteira (DIP)
├── main.js                   # ← Ponto de entrada do jogo interativo
├── package.json
└── .gitignore
```

---

## 🚀 Como Rodar

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior

### Instalação

```bash
npm install
```

### Rodar os testes (modo watch)

```bash
npm test
```

### Jogar no terminal

```bash
npm start
```

---

## 🧪 Casos de Teste

Os testes estão divididos em dois arquivos:

### `jogoDaForca.test.js` — Lógica do Jogo

| # | Descrição |
|---|-----------|
| 1 | Deve iniciar exibindo traços para a palavra oculta |
| 2 | Deve revelar a letra correta quando o jogador chutar corretamente |
| 3 | Deve reduzir as vidas quando o jogador errar o chute |
| 4 | Deve declarar vitória quando todas as letras forem reveladas |

### `fronteiraExterna.test.js` — Validação de Fronteira (DIP)

| # | Descrição |
|---|-----------|
| 1 | Deve aplicar cor amarela na forca e ciano na palavra via injeção de dependência |
| 2 | Deve aplicar cor vermelha nas vidas quando estiverem baixas |

---

## 📐 Regras do Jogo

- A palavra secreta é definida no início e convertida para **maiúsculas**
- O jogador começa com **6 vidas**
- Cada letra errada remove 1 vida
- Letras repetidas **não** penalizam novamente
- O jogo termina em **vitória** quando todas as letras são reveladas
- O jogo termina em **derrota** quando as vidas chegam a zero

---

## 🏗️ API da Classe `JogoDaForca`

```js
const jogo = new JogoDaForca('JAVASCRIPT'); // vidas padrão: 6
const jogo = new JogoDaForca('TDD', 3);     // vidas customizadas

jogo.exibirPalavra();       // → '_ _ _ _ _ _ _ _ _ _'
jogo.chutar('A');           // revela 'A' ou reduz vida
jogo.obterVidasRestantes(); // → número de vidas restantes
jogo.obterStatus();         // → 'Jogando...' | 'Venceu!' | 'Perdeu!'
```

---

## 💡 Ciclo TDD — Como Praticar

```
🔴 RED    → Rode os testes. Veja FALHAR.
🟢 GREEN  → Escreva o mínimo de código para passar.
🔵 REFACTOR → Melhore sem quebrar os testes.
```

**Nunca escreva código sem um teste vermelho antes.**

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|------------|-----|
| Node.js    | Runtime JavaScript |
| Jest       | Framework de testes |
| Chalk      | Colorização no terminal |
| Boxen      | Caixas decorativas no terminal |
| ES Modules | Sistema de módulos nativo (`"type": "module"`) |

---

## 📚 Referências

- BECK, Kent. *Test-Driven Development: By Example*. Addison-Wesley, 2002.
- MARTIN, Robert C. *Clean Code: A Handbook of Agile Software Craftsmanship*. Prentice Hall, 2008.
