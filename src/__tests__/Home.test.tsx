import Home from '../../pages/Home';
import { render, screen, waitFor } from '../utils/test-utils';

beforeEach(() => {
  render(<Home />);
});

test('Test de componente index', async () => {
  expect(screen.getByTestId('loader')).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.getByTestId('loader')).toHaveClass('off');
  });
  const nodoPrincipal = screen.getByTestId('home');
  expect(nodoPrincipal).toBeInTheDocument();
});
