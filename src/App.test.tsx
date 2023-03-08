// import { render, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {

  //   test('renders the user directory', async () => {
  //     render(
  //       <MemoryRouter initialEntries={['/']}>
  //         <App />
  //       </MemoryRouter>,
  //     );
  //     const header = screen.findByRole('heading', { name: 'User Directory' });
  //     expect(header).toBeInTheDocument();
  //     const userList = await screen.findByRole('list');
  //     expect(userList).toBeInTheDocument();
  //   });


  //   test('renders the loading message when users are not loaded', () => {
  //     const { container } = render(<App />);
  //     const loadingElement = container.querySelector('div');
  //     expect(loadingElement).toHaveTextContent('Loading...');
  //   });

  //   test('renders the error message when users fail to load', async () => {
  //     jest.spyOn(global, 'fetch').mockImplementation(() =>
  //       Promise.reject(new Error('Failed to fetch')),
  //     );
  //     render(<App />);
  //     const errorMessage = await screen.findByText(
  //       'There was an error loading the data. Please reload the page or try again later.',
  //     );
  //     expect(errorMessage).toBeInTheDocument();
  //   });

});
