import { jest } from '@jest/globals';
import { InterfaceTerminal } from '../src/interfaceTerminal.js';

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
