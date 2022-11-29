import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
// import pokemonList from '../data';
import App from '../App';

describe('', () => {
  test('', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/');
    const linkDetalhes = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkDetalhes);
    // console.log(history);
    const titulo = screen.getByRole('heading', { name: /pikachu details/i, level: 2 });
    expect(titulo).toBeInTheDocument();
    expect(linkDetalhes).not.toBeInTheDocument();
    const SubTitulo = screen.getByRole('heading', { name: /summary/i, level: 2 });
    expect(SubTitulo).toBeInTheDocument();
    // const nomeHtml = screen.getByTestId('pokemon-name');
    // const nome = nomeHtml.innerHTML;
    // const [, pokemonId] = history.location.way(/ pokémon \/ ( \d + ) /);
    // const pokemon = pokemonList.find(({ id }) => id === Number());
    // expect(pokemon).toBe('o');
  });
});
