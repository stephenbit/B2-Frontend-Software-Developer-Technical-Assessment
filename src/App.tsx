import { useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import UsersList from './UsersList';
import SingleUser from './SingleUser';
import './App.css';

export interface IUser {
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
  const [users, setUsers] = useState<IUser[]>([]);
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

  if (!users || users.length < 1) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <HashRouter>
      <div>
        <header>
          <h1>User Directory</h1>
        </header>
        <main className="main">
          <Routes>
            <Route path="/" element={<UsersList users={users} />} />
            <Route path="/users/:userId" element={<SingleUser users={users} />} />
          </Routes>
        </main>
        <footer className="App-footer">
          <p>Created by S. Ramsay, &copy; {new Date().getFullYear()}</p>
          <p>API provided by <a href="https://jsonplaceholder.typicode.com/">typicode</a></p>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
