import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('', () => {
  test('Testando se mostra as informaçoes do pokemon na tela', () => {
    renderWithRouter(<App />);
    const img = screen.getByRole('img', {
      name: /pikachu sprite/i,
      src: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
    });
    const nome = screen.getByTestId('pokemon-name');
    const tipo = screen.getByTestId('pokemon-type');
    const peso = screen.getByTestId('pokemon-weight');

    expect(peso).toBeInTheDocument();
    expect(tipo).toBeInTheDocument();
    expect(nome).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });
  test('Testando se tem o link de navegação no card', () => {
    renderWithRouter(<App />);
    const linkDetalhes = screen.getByRole('link', { name: /More details/i, href: '/pokemon/25' });
    expect(linkDetalhes).toBeInTheDocument();

    userEvent.click(linkDetalhes);

    const detalhes = screen.getByRole('heading', { name: /pikachu details/i });
    expect(detalhes).toBeInTheDocument();
    expect(linkDetalhes).toHaveAttribute('href', '/pokemon/25');

    const pokeNome = screen.getByTestId('pokemon-name');
    expect(pokeNome).toBeInTheDocument();
  });
  test('Verificando se tem a img de favorito', async () => {
    const { history } = renderWithRouter(<App />);

    const linkDetalhes = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkDetalhes);
    expect(linkDetalhes.href).toMatch(history.location.pathname);

    const checkFavorito = await screen.findByRole('checkbox');
    userEvent.click(checkFavorito);

    const favorito = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(favorito).toHaveAttribute('src', '/star-icon.svg');
  });
});
