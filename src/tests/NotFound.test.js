import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('', () => {
  const { history } = renderWithRouter(<App />);

  const urlInvalida = 'details';

  act(() => history.push(urlInvalida));

  const pagNaoEncontrada = screen.getByRole('heading', {
    name: /Page requested not found/i,
    level: 2 });

  const img = screen.getByRole('img', {
    src: 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif',
  });

  expect(pagNaoEncontrada).toBeInTheDocument();
  expect(img).toBeInTheDocument();
});
