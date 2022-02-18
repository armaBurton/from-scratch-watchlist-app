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
    console.log(`|| `, window.location.href);
  }, [user]);

  function handleLogout(){
    logout();
    setUser('');
  }

  return (
    <Router>
      <div>
        {
          !user 
            ? <header></header>
            : <header>
              <ul>
                <li>
                  <NavLink activeClassName='active' to='#'>Search</NavLink>
                </li>
                <li>
                  <NavLink activeClassName='active' to='/list-page'>WatchList</NavLink>
                </li>
                <li>
                  <NavLink activeClassName='inactive' to='/' onClick={handleLogout}>Logout</NavLink>
                </li>
              </ul>
            </header>
        }
        <main>
          <Switch>
            <Route exact path="/">
              {console.log(`|| user `, user)}
              {
                !user
                  ? <AuthPage setUser={setUser} />
                  : <Redirect to='/list-page' user={user} />
              }
            </Route>
            <Route exact to='/list-page'>
              {
                !user
                  ? <Redirect path='/' />
                  : <ListPage user={user} />
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;