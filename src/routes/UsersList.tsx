import React from 'react';
import { Link } from 'react-router-dom';
import { IUser } from '../App';
import { formatAriaPhoneNumber, formatName } from '../helpers/HelperFunctions'
import './UsersList.css';

// type UsersListProps = Pick<IUser, 'id' | 'name' | 'email' | 'phone' | 'website'>
//   & { address: Array<Pick<IUser['address'], 'city'>> }

interface UsersListProps {
  users: IUser[];
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {

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
            <wbr />
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
    <div className='users-list'>
      <h2>User List</h2>
      <ol>
        {users.sort((a, b) => (formatName(a.name) > formatName(b.name) ? 1 : -1)).map((user) => (
          <li className="user-container" key={user.id}>
            <h3>{user.name}</h3>
            <dl>
              {generateUsersListDlContents(user)}
              <Link to={`/users/${user.id}`} className="full-details-button">
                <p>Full details</p>
              </Link>
            </dl>
          </li>
        ))}
      </ol>
    </div >
  );
};

export default UsersList;
