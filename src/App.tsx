import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersList from './UsersList';
import SingleUser from './SingleUser';
import './App.css';

export interface User {
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
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
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
        There was an error loading the data. Please reload the page or try again later.
      </div>
    );
  }

  return (
    <div>
      {users.length > 0 ? (
        <div className="main" role="main" aria-label="List of users">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<UsersList users={users} />} />
              <Route path="/users/:userId" element={<SingleUser users={users} />} />
            </Routes>
          </BrowserRouter>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default App;
