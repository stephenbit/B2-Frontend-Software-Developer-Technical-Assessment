import React from 'react';
import { Link } from 'react-router-dom';
import { IUser } from './App';
import './UsersList.css';

// type UsersListProps = Pick<IUser, 'id' | 'name' | 'email' | 'phone' | 'website'>
//   & { address: Array<Pick<IUser['address'], 'city'>> }

interface UsersListProps {
  users: IUser[];
}

export const formatAriaPhoneNumber = (phoneNumber: string): string => {
  const extensionIndex = phoneNumber.toLowerCase().indexOf('x');
  const extension = extensionIndex > -1 ? ' extension ' : '';
  const formatted = phoneNumber
    .replace(/[^0-9x]/g, '') // remove anything that’s not a number or x
    .replace(/x/gi, extension); // replace x or X with extension
  return formatted.replace(/(\d)/g, '$1 '); // insert spaces after every digit
};

const UsersList: React.FC<UsersListProps> = ({ users }) => {

  const formatName = (name: string): string => {
    const formattedName = name
      .replace(/^(mr|mr\.|mrs|mrs\.|ms|ms\.|dr|dr\.|prof|rev|fr|sir|madam|sra|srta|srt|hr)\.? /i, '')
      .charAt(0)
      .toUpperCase() + name.slice(name.indexOf(' ') + 1).charAt(0).toUpperCase();
    return formattedName;
  };

  const generateUsersListDlContents = (user: IUser) => {
    const dlContents = [
      { label: 'User ID:', value: user.id },
      {
        label: 'Email:', value:
          <a
            href={`mailto:${user.email}`}
            aria-label={`Email ${user.name}`}
          >
            {user.email}
          </a>
      },
      { label: 'City:', value: user.address.city },
      {
        label: 'Phone:',
        value:
          <span
            aria-label={formatAriaPhoneNumber(user.phone)}
          >
            {user.phone}
          </span>
      },
      {
        label: 'Website:', value: (
          <span>
            <a href={`https://${user.website}`}
              target="_blank"
              aria-label="Website"
              rel="noopener noreferrer">
              {user.website}
            </a>
            {' '}
            (Opens in a new tab)
          </span>
        )
      },
    ];

    return dlContents.map(({ label, value }, index) => (
      <React.Fragment key={index}>
        <dt>
          <span>{label}</span>
        </dt>
        <dd>
          <span>{value}</span>
        </dd>
      </React.Fragment>
    ));
  };

  return (
    <div className='column'>
      <h2>User List</h2>
      <ol>
        {users.sort((a, b) => (formatName(a.name) > formatName(b.name) ? 1 : -1)).map((user) => (
          <div className="user-container" key={user.id}>
            <li>
              <h3>{user.name}</h3>
              <dl>
                {generateUsersListDlContents(user)}
              </dl>
              <Link to={`/users/${user.id}`} className="full-details-button">
                <p>Full details about<br />
                  {user.name}
                </p>
              </Link>
            </li>
          </div>
        ))}
      </ol>
    </div >
  );
};

export default UsersList;
