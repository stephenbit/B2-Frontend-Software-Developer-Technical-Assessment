import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UsersListUser } from "../helpers/Types";
import {
  formatAriaPhoneNumber,
  formatNameWithoutTitles,
  searchUsers
} from '../helpers/HelperFunctions';
import './UsersList.css';

const UsersList: React.FC<{ users: UsersListUser[] }> = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const sortedUsers = users.sort((a, b) => (
    formatNameWithoutTitles(a.name) > formatNameWithoutTitles(b.name) ? 1 : -1
  ));

  const generateUsersListDlContents = (user: UsersListUser) => {
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

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const filteredUsers = searchTerm ? searchUsers(sortedUsers, searchTerm) : sortedUsers;

  return (
    <div className='column'>
      <h2>User List</h2>
      <div className='search-container'>
        <label htmlFor="search-input">Search by name:</label>
        <input
          type="text"
          id="search-input"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
          aria-label="Search for users"
          {...(filteredUsers.length === 0 && {
            'aria-describedby': 'no-users-found'
          })}
        />
      </div>
      <div>
        <ol>
          {filteredUsers.map((user) => (
            <li key={user.id} className="user-list-item">
              <div className='users-list-user-container'>
                <h3>{user.name}</h3>
                <dl>
                  {generateUsersListDlContents(user)}
                </dl>
                <Link
                  to={`/users/${user.id}`}
                  className="full-details-button"
                  aria-label={`View details for ${user.name}`}
                >
                  <p>Full details</p>
                </Link>
              </div >
            </li>
          ))}
        </ol>
      </div>
    </div >
  );
};

export default UsersList;
