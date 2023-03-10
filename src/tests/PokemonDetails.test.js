import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import pokemonList from '../data';
import App from '../App';

describe('Testando a tela do Pokemon Detalhes', () => {
  test('Verificando se tem o titulo com h2', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/');

    const linkDetalhes = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkDetalhes);

    const titulo = screen.getByRole('heading', { name: /pikachu details/i, level: 2 });
    expect(titulo).toBeInTheDocument();
    expect(linkDetalhes).not.toBeInTheDocument();
  });
  test('Testando se tem o subTítulo com h2 e o paragrafo com informação do pokemon', async () => {
    renderWithRouter(<App />);

    const linkDetalhes = await screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkDetalhes);

    const SubTitulo = await screen.getByRole('heading', { name: /summary/i, level: 2 });
    expect(SubTitulo).toBeInTheDocument();

    const texto = pokemonList.find(({ name, summary }) => {
      if (name === 'Pikachu') {
        return summary;
      }
      return summary;
    });
    expect(texto.summary).toBe('This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.');
  });
  test('Teste se existe na página uma seção com os mapas contendo as localizações do Pokémon', async () => {
    renderWithRouter(<App />);

    const linkDetalhes = await screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkDetalhes);

    const subTituloMap = await screen.getByRole('heading', { name: /Game Locations of pikachu/i, level: 2 });
    expect(subTituloMap).toBeInTheDocument();

    const localizacao = pokemonList.find(({ name, foundAt }) => {
      if (name === 'Pikachu') {
        return foundAt;
      }
      return foundAt;
    });

    expect(localizacao.foundAt).toBe(localizacao.foundAt);
    expect(localizacao.foundAt[0].location).toBe('Kanto Viridian Forest');
    expect(localizacao.foundAt[1].location).toBe('Kanto Power Plant');
  });
  test('Testando se é exibido o nome da localização e imagem', async () => {
    renderWithRouter(<App />);

    const linkDetalhes = await screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkDetalhes);

    const imgMap = screen.getAllByRole('img', { name: /pikachu location/i });
    expect(imgMap[0]).toHaveAttribute('alt', 'Pikachu location');
    expect(imgMap[1]).toHaveAttribute('alt', 'Pikachu location');
    expect(imgMap[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(imgMap[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });
  test('Teste se o usuário pode favoritar um Pokémon através da página de detalhes', async () => {
    renderWithRouter(<App />);

    const linkDetalhes = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkDetalhes);

    const labelFavorito = screen.getByText(/Pokémon favoritado?/i);
    expect(labelFavorito).toBeInTheDocument();

    const checkBoxFavorito = await screen.getByRole('checkbox');
    expect(checkBoxFavorito).toBeInTheDocument();

    userEvent.click(checkBoxFavorito);

    expect(checkBoxFavorito.checked).toBe(true);

    userEvent.click(checkBoxFavorito);
    expect(checkBoxFavorito.checked).toBe(false);
  });
});
