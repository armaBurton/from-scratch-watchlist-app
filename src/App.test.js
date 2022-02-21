import { render, screen } from '@testing-library/react';
import WatchedPage from './WatchedPage/WatchedPage';

test('renders learn react link', () => {
  render(<WatchedPage />);
  const linkElement = screen.getByText(/wanted/i);
  expect(linkElement).toBeInTheDocument();
});