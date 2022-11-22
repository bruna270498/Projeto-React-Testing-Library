import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Verificando se aparece na tela"No favorite pokemon found"', () => {
  renderWithRouter(<App />);

  const Link = screen.getByRole('link', { name: /Favorite Pokémon/i });
  userEvent.click(Link);

  const naoFavorito = screen.getByText(/No favorite Pokémon found/i);

  expect(naoFavorito).toBeInTheDocument();
});
