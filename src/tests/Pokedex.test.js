import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Verificando se ha um titulo', () => {
  renderWithRouter(<App />);

  const titulo = screen.getByRole('heading', {
    name: /Encountered Pokémon/i,
    level: 2,
  });
  expect(titulo).toBeInTheDocument();
});
test('', () => {
  renderWithRouter(<App />);

  const botao = screen.getByRole('button', { name: /próximo pokémon/i });
  expect(botao).toBeInTheDocument();
});
