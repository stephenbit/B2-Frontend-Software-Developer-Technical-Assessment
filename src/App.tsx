import { useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import UsersList from './routes/UsersList';
import SingleUser from './routes/SingleUser';
import { IUser } from "./helpers/Types";
import Header from "./components/Header";
import './App.css';
import './LoadingBar.css';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const json = await response.json();
        setUsers(json);
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
      } catch (e) {
        setIsLoading(false);
        console.log(e);
      }
    };
    fetchUsers();
  }, []);

  function NotFound() {
    console.log('404 page not found');
    return (
      <section className='column'>
        <div
          id={`user-not-found-container`}
          role="alert"
          aria-live="polite"
          aria-atomic="true"
        >
          <h2>404 - Page Not Found</h2>
          <h3>The page you requested does not exist.</h3>
        </div>
      </section>
    );
  }

  return (
    <div>
      {(!users || users.length < 1 || isLoading) ? (
        <LoadingScreen isLoading={isLoading} />
      ) : (
        <HashRouter>
          <Header />
          <main className="main" role="main">
            <Routes>
              <Route path="/" element={<UsersList users={users} />} />
              <Route path="/users/:userId" element={<SingleUser users={users} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <footer className="App-footer" role="contentinfo">
            <p>Created by S. Ramsay, &copy; {new Date().getFullYear()}</p>
            <p>API provided by <a href="https://jsonplaceholder.typicode.com/">typicode</a></p>
          </footer>
        </HashRouter>
      )}
    </div>
  );
}

export default App;
