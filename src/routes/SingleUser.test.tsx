// import { render, screen } from '@testing-library/react';
// import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { IUser } from '../App';
// import SingleUser from './SingleUser';

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

describe('SingleUser', () => {

    //     test('displays the user details when a valid user ID is provided', () => {
    //         const testUserId = '1';
    //         render(
    //             <MemoryRouter initialEntries={[`/users/${testUserId}`]}>
    //                 <Routes>
    //                     <Route path="/users/:userId" element={<SingleUser users={testUsers} />} />
    //                 </Routes>
    //             </MemoryRouter >,
    //         );
    //         const testUser = testUsers.find((user) => user.id.toString() === testUserId);
    //         const userName = screen.getByRole('heading', { name: testUser?.name });
    //         expect(userName).toBeInTheDocument();
    //         const userPhone = screen.getByLabelText(testUser?.phone);
    //         expect(userPhone).toBeInTheDocument();
    //         const userWebsite = screen.getByRole('link', { name: testUser?.website });
    //         expect(userWebsite).toBeInTheDocument();
    //     });

    //     test('displays an error message when an invalid user ID is provided', () => {
    //         const testUserId = 'invalid';
    //         render(
    //             <MemoryRouter initialEntries={[`/users/${testUserId}`]}>
    //                 <Route path="/users/:userId">
    //                     <SingleUser users={testUsers} />
    //                 </Route>
    //             </MemoryRouter>,
    //         );
    //         const errorMessage = screen.getByText('User not found');
    //         expect(errorMessage).toBeInTheDocument();
    //     });

    //     test('displays a link to return to the user list', () => {
    //         const testUserId = '1';
    //         render(
    //             <MemoryRouter initialEntries={[`/users/${testUserId}`]}>
    //                 <Route path="/users/:userId">
    //                     <SingleUser users={testUsers} />
    //                 </Route>
    //             </MemoryRouter>,
    //         );
    //         const returnLink = screen.getByRole('link', { name: /return to the list of users/i });
    //         expect(returnLink).toBeInTheDocument();
    //     });
});
