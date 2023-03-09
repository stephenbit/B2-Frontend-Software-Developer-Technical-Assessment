import { useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import UsersList from './routes/UsersList';
import SingleUser from './routes/SingleUser';
import './App.css';
import './LoadingBar.css';

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
  const [showLoadingBar, setShowLoadingBar] = useState(true);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoadingBar(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  if (!users || users.length < 1) {
    return (
      <div>
        {showLoadingBar && (
          <div className="loading-message">
            <p>Loading, please wait...</p>
            <p>If the content doesn't appear after a few seconds, please refresh the page or try again later.</p>
          </div>
        )}
        <div className="loading-bar"></div>
      </div>
    );
  }

  return (
    <div>
      <HashRouter>
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
      </HashRouter>
    </div>
  );
};

export default App;
