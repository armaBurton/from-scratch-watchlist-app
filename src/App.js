import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import AuthPage from './AuthPage/AuthPage';
import ListPage from './ListPage/ListPage';
import { getUser, logout } from './services/fetch-utils';

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    async function getUserData(){
      const data = await getUser();
      setUser(data);
    }
    getUserData();
  }, []);

  useEffect(() => {
    console.log(`|| user >`, user);
  }, [user]);
  
  function handleLogout(){
    logout();
    setUser('');
  }

  return (
    <Router>
      <div>
        <header>
          {
            user && 
              <ul>
                <li>
                  <NavLink activeClassName='active' to='#'>Search</NavLink>
                </li>
                <li>
                  <NavLink activeClassName='active' to='#'>WatchList</NavLink>
                </li>
                <li>
                  <NavLink activeClassName='inactive' to='/' onClick={handleLogout}>Logout</NavLink>
                </li>
              </ul>
          }
        </header>
        <main>
          <switch>
            <Route exact path='/'>
              {
                !user
                  ? <AuthPage setUser={setUser} />
                  : <Redirect path='/list' />
              }
            </Route>
            <Route exact path='/list'>
              {
                !user
                  ? <Redirect path='/' />
                  : <ListPage user={user} />
              }
            </Route>
          </switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
