// import React from 'react';
// import { render, screen } from '@testing-library/react';
import { IUser } from '../App';
// import App from '../App';
// import UsersList from './UsersList';

const testUsers: IUser[] = [
  {
    id: 1,
    name: 'Alice',
    username: 'alice',
    email: 'alice@example.com',
    address: {
      street: '123 Main St',
      suite: 'Apt 1',
      city: 'Anytown',
      zipcode: '12345',
      geo: {
        lat: '0',
        lng: '0',
      },
    },
    phone: '555-555-1234',
    website: 'example.com',
    company: {
      name: 'Acme',
      catchPhrase: 'We make everything',
      bs: 'Lorem ipsum',
    },
  },
  {
    id: 2,
    name: 'Bob',
    username: 'bob',
    email: 'bob@example.com',
    address: {
      street: '456 Elm St',
      suite: 'Apt 2',
      city: 'Anytown',
      zipcode: '12345',
      geo: {
        lat: '0',
        lng: '0',
      },
    },
    phone: '555-555-5678',
    website: 'example.com',
    company: {
      name: 'Acme',
      catchPhrase: 'We make everything',
      bs: 'Lorem ipsum',
    },
  },
];

describe('UsersList', () => {

  //   test('renders a list of users', () => {
  //     render(<App />);
  //     const userList = screen.ByRole('list');
  //     expect(userList.children.length).toBe(testUsers.length);
  //   });

  //   test('displays the correct user name for each item', () => {
  //     render(<App />);
  //     const userNames = testUsers.map((user) => user.name);
  //     userNames.forEach((name) => {
  //       const nameElement = screen.getByText(name);
  //       expect(nameElement).toBeInTheDocument();
  //     });
  //   });

  //   test('formats the phone number for each user', () => {
  //     render(<App />);
  //     const formattedNumbers = testUsers.map((user) =>
  //       screen.getByLabelText(user.phone),
  //     );

  //     formattedNumbers.forEach((number) => {
  //       expect(number).toHaveTextContent('(555) 555-1234');
  //     });
  //   });

  //   test('displays a link to the full user details', () => {
  //     render(<App />);
  //     const links = screen.getAllByRole('link', { name: /full details about/i });
  //     expect(links.length).toBe(testUsers.length);
  //   });
});