import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Testando os componentes da App.js', () => {
  renderWithRouter(<App />);
  const home = screen.getByRole('link', { name: /home/i });
  const sobre = screen.getByRole('link', { name: /about/i });
  const pokeFavorito = screen.getByRole('link', { name: /Favorite Pokémon/i });

  expect(home).toBeInTheDocument();
  expect(sobre).toBeInTheDocument();
  expect(pokeFavorito).toBeInTheDocument();
});
test('Testando se ao clicar no link a página é redirecionada para o home', () => {
  const { history } = renderWithRouter(<App />);

  const home = screen.getByRole('link', { name: /home/i });
  userEvent.click(home);
  const { pathname } = history.location;
  expect(pathname).toBe('/');
});
test('Testando se ao clicar no link a página é redirecionada para o about', () => {
  const { history } = renderWithRouter(<App />);

  const sobre = screen.getByRole('link', { name: /about/i });
  userEvent.click(sobre);

  const { pathname } = history.location;
  expect(pathname).toBe('/about');
});
test('Testando se ao clicar no link a página é redirecionada para o Pokemon Favorito', () => {
  const { history } = renderWithRouter(<App />);

  const pokeFavorito = screen.getByRole('link', { name: /Favorite Pokémon/i });
  userEvent.click(pokeFavorito);

  const { pathname } = history.location;
  expect(pathname).toBe('/favorites');
});
test('Testando pagina não encontrada', () => {
  const { history } = renderWithRouter(<App />);

  const urlInvalido = '/cachorro';

  act(() => {
    history.push(urlInvalido);
  });
  const { pathname } = history.location;
  expect(pathname).toBe(urlInvalido);
});
