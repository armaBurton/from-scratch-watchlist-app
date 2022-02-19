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
import { getUser, logout, searchCards } from './services/fetch-utils';
import SearchPage from './SearchPage/SearchPage';

function App() {
  const [user, setUser] = useState();
  const [search, setSearch] = useState('');
  const [cards, setCards] = useState();

  useEffect(() => {
    async function getUserData(){
      const data = await getUser();
      setUser(data);
    }
    getUserData();
  }, []);

  function handleLogout(){
    logout();
    setUser('');
  }

  console.log(`|| cards >`, cards);

  return (
    <Router>
      <div>
        {
          !user 
            ? <header></header>
            : <header>
              <ul>
                <li>
                  {/* <NavLink activeClassName='active' to='#'>Search</NavLink> */}
                  <SearchPage search={search} setSearch={setSearch} setCards={setCards} />
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
                  : <ListPage user={user} cards={cards} />
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;