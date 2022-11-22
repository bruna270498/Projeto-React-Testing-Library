import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

test('Verificando se da pagina não encontrada e img', () => {
  const { history } = renderWithRouter(<NotFound />);

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
