import { jest } from '@jest/globals';

jest.unstable_mockModule('@inquirer/prompts', () => ({
  password: jest.fn(),
  input: jest.fn()
}));

const { InterfaceTerminal } = await import('../src/interfaceTerminal.js');
const { password, input } = await import('@inquirer/prompts');

describe('Validação de Fronteira Externa (DIP)', () => {
  const mockPainter = {
    yellow: jest.fn(txt => txt),
    green: jest.fn(txt => txt),
    red: jest.fn(txt => txt),
    cyan: jest.fn(txt => txt),
    magenta: jest.fn(txt => txt),
    bold: jest.fn(txt => txt)
  };

  test('deve aplicar a cor amarela na forca e ciano na palavra via injeção', () => {
    InterfaceTerminal.formatar('P A L A V R A', 6, 'Jogando', mockPainter);
    expect(mockPainter.yellow).toHaveBeenCalled();
    expect(mockPainter.cyan).toHaveBeenCalledWith('Palavra: ');
    expect(mockPainter.bold).toHaveBeenCalledWith('P A L A V R A');
  });

  test('deve aplicar cor vermelha nas vidas quando estiverem baixas', () => {
    InterfaceTerminal.formatar('P A L A V R A', 1, 'Jogando', mockPainter);
    expect(mockPainter.red).toHaveBeenCalled();
  });
});

describe('Validação de Entrada de Dados (Inquirer)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('deve ler a palavra secreta e retorná-la em maiúsculas', async () => {
    password.mockResolvedValueOnce('secreta');
    const resultado = await InterfaceTerminal.lerPalavraSecreta();
    expect(password).toHaveBeenCalledWith({ message: 'Digita a palavra para o jogo:', mask: '*' });
    expect(resultado).toBe('SECRETA');
  });

  test('deve ler a letra e retorná-la', async () => {
    input.mockResolvedValueOnce('a');
    const resultado = await InterfaceTerminal.lerLetra();
    expect(input).toHaveBeenCalledWith({ message: 'Digite uma letra: ' });
    expect(resultado).toBe('A');
  });
});
