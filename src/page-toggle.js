import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('should toggle url change to /watched-cards and find <h1>Wanted</h1>', async () => {
  render(<App />);

  const watchedCardsToggle = screen.getByText(/Watched Cards/i);

  fireEvent.click(watchedCardsToggle);

  // const wanted = await screen.f(/wanted/i);

  expect(watchedCardsToggle).toBe('http://localhost/watched-cards');
});