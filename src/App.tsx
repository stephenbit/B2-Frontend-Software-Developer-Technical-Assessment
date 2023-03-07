import React, { useEffect, useState } from 'react';
import Users from './Users'
import './App.css';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const App: any = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json();
        setUsers(json);
      } catch (e) {
        setError(true);
      }
    };
    fetchUsers();
  }, []);

  if (error) {
    return (
      <div>
        There was an error loading the data.
        Please reload the page or try again later.
      </div>
    )
  }
  return (
    <div>
      {users.length > 0 ? (
        <div className='main' role='main' aria-label='List of users'>
          <Users users={users} />
        </div >
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;