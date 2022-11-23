import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import data from '../data';
import App from '../App';

describe('verificando page de Pokedex', () => {
  test('Verificando se ha um titulo', () => {
    renderWithRouter(<App />);

    const titulo = screen.getByRole('heading', {
      name: /Encountered Pokémon/i,
      level: 2,
    });
    expect(titulo).toBeInTheDocument();
  });
  test('Testando se o botão funciona e se ao clicar é exibido o próximo Pokémon', () => {
    renderWithRouter(<App />);

    const botao = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(botao).toBeInTheDocument();

    data.forEach((pokemon, index) => {
      userEvent.click(botao);
      const nomePoke = pokemon.name;
      expect(nomePoke).toBe(data[index].name);
    });
  });
  test('Verificando se o Pokedex tem o botão de filtro', () => {
    renderWithRouter(<App />);
    const button = screen.getAllByTestId('pokemon-type-button');
    button.forEach((e) => {
      const btn = e.innerHTML;
      expect(btn).toBe(e.innerHTML);
    });
  });
  test('Testando botão TUDO', () => {
    renderWithRouter(<App />);
    const btnTudo = screen.getByRole('button', { name: /all/i });
    userEvent.click(btnTudo);
    expect(btnTudo).toBeInTheDocument();
    expect(btnTudo.innerHTML).toBe('All');
  });
});
