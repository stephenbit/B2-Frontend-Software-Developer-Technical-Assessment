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
          <>
            <span className='visually-hidden'>
              {formatAriaPhoneNumber(user.phone)}
            </span>
            <span aria-hidden='true'>
              {user.phone}
            </span>
          </>

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

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const filteredUsers = searchTerm ? searchUsers(sortedUsers, searchTerm) : sortedUsers;

  let prevMessage = '';

  const getUserUpdateAriaMessage = (users: UsersListUser[], filteredUsers: UsersListUser[]) => {
    let message = '';

    if (filteredUsers.length === 0) {
      message = 'No users found';
    } else if (users.length !== filteredUsers.length) {
      message = `The user list has updated`
    } else if (filteredUsers.length === users.length) {
      message = 'All users are displayed';
    }

    if (message !== prevMessage) {
      prevMessage = message;
      return message ? (
        <div aria-live="polite" aria-describedby="users-list-message" className='visually-hidden'>
          {message}
        </div>
      ) : null;
    } else {
      return null;
    }
  }

  return (
    <section className='column'>
      {getUserUpdateAriaMessage(users, filteredUsers)}
      <h2>User List</h2>
      <div className='search-container'>
        <label htmlFor="search-input">Search by name:</label>
        <input
          type="text"
          id="search-input"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
        {filteredUsers.length === 0 && (
          <h3 id="no-users-found">No users found with that name</h3>
        )}
      </div>
      <div id={`users-list-container`}>
        <ol>
          {filteredUsers.map((user) => (
            <li key={user.id} className="user-list-item">
              <div className='users-list-user-container'>
                <label className="visually-hidden">

                  Full name of the user:</label>
                <h3 id={`user-${user.id}`}>{user.name}</h3>
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
    </section >
  );
};

export default UsersList;
