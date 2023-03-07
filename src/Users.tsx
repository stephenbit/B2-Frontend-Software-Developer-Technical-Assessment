import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
// import SingleUser from './SingleUser';

type User = {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
  phone: string;
  website: string;
};

interface UsersProps {
  users: User[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
  const formatName = (name: string): string => {
    const formattedName = name.replace(
      /^(mr|mr\.|mrs|mrs\.|ms|ms\.|dr|dr\.|prof|rev|fr|sir|madam|sra|srta|srt|hr)\.? /i,
      ''
    ).charAt(0).toUpperCase() + name.slice(name.indexOf(' ') + 1).charAt(0).toUpperCase();
    return formattedName;
  };

  const formatAriaPhoneNumber = (phoneNumber: string): string => {
    const extensionIndex = phoneNumber.toLowerCase().indexOf('x');
    const extension = extensionIndex > -1 ? ' extension ' : '';
    const formatted = phoneNumber
      .replace(/[^0-9x]/g, '') // remove anything that’s not a number or x
      .replace(/x/gi, extension); // replace x or X with extension
    return formatted.replace(/(\d)/g, '$1 '); // insert spaces after every digit
  };

  return (
    <>
      <h1>User List</h1>
        {users
          .sort((a, b) => formatName(a.name) > formatName(b.name) ? 1 : -1)
          .map((user) => (
            <dl key={user.id}>
              <dt>
                <span><strong>User ID: </strong></span>
              </dt>
              <dd>
                <span>{user.id}</span>
              </dd>
              {/* <h2>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </h2> */}
              <dt>
                <span>
                  <strong aria-label='Email label'>Email: </strong>
                </span>
              </dt>
              <dd>
                <span>
                  <a href={`mailto:${user.email}`} aria-label={`Email ${user.name}`}>
                    {user.email}
                  </a>
                </span>
              </dd>
              <dt>
                <span aria-label='Company name'>
                  <strong aria-label='Address city'>City:</strong> {user.address.city}
                </span>
              </dt>
              <dd>
                <span>
                  <strong aria-label='Phone label'>Phone: </strong>
                </span>
                <span aria-label={formatAriaPhoneNumber(user.phone)}>
                  {user.phone}
                </span>
              </dd>
              <dt>
                <span>
                  <strong aria-label='Website label'>Website (Opens in a new tab): </strong>
                </span>
              </dt>
              <dd>
                <span>
                  <a href={`https://${user.website}`}
                    target='_blank'
                    aria-label='Website'
                    rel='noopener noreferrer'>
                    {user.website}
                  </a>
                </span>
              </dd>
            </dl>
          ))}
        {/* <Routes>
        <Route path='/users/:id' element={<SingleUser users={users} />} />
      </Routes> */}
    </>
  );
};

export default Users;