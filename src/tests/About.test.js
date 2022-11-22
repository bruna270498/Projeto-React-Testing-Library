import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Verificando se há titulo na tela e imagem', () => {
  renderWithRouter(<App />);

  const sobreLink = screen.getByRole('link', { name: /about/i });
  userEvent.click(sobreLink);
  const titulo = screen.getByRole('heading', {
    name: /About Pokédex/i,
    level: 2 });

  const img = screen.getByRole('img', {
    src: 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png',
  });

  expect(titulo).toBeInTheDocument();
  expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
test('Testar se tem 2 paragrafos', () => {
  renderWithRouter(<App />);

  const sobreLink = screen.getByRole('link', { name: /about/i });
  userEvent.click(sobreLink);

  const paragrafo1 = screen.getByText(/This application simulates a Pokédex/i);
  expect(paragrafo1).toBeInTheDocument();

  const paragrafo2 = screen.getByText(/One can filter Pokémon by type/i);
  expect(paragrafo2).toBeInTheDocument();
});
