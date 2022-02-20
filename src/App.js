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
import { getUser, logout, getOwnage } from './services/fetch-utils';
import SearchPage from './SearchPage/SearchPage';
import WatchedPage from './WatchedPage/WatchedPage';

function App() {
  const [user, setUser] = useState();
  const [search, setSearch] = useState('');
  const [cards, setCards] = useState();
  const [ownage, setOwnage] = useState([]);
  const [page, setPage] = useState();

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

  async function refreshOwnage(){
    const myOwnage = await getOwnage();

    setOwnage(myOwnage);
  }

  useEffect(() => {
    refreshOwnage();

  }, []);
  
  function isOnOwnedList(dbfId){
    const match = ownage.find(card => Number(card.dbfId) === Number(dbfId));

    return Boolean(match);
  }

  const location = window.location.pathname.split('/').pop();

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
                  {
                    location === 'watched-cards' 
                      ? <NavLink to='/list-page' onClick={setPage}>Search</NavLink>
                      : <SearchPage search={search} setSearch={setSearch} setCards={setCards} />}
                </li>
                <li>
                  <NavLink activeClassName='active' to='/watched-cards' setCards={setCards} setSearch={setSearch} onClick={setPage}>Watched Cards</NavLink>
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
                  : <ListPage 
                    user={user} 
                    cards={cards} 
                    isOnOwnedList={isOnOwnedList} 
                    refreshOwnage={refreshOwnage} 
                  />
              }
            </Route>
            <Route exact to='watched-cards'>
              {
                !user
                  ? <Redirect path='/' />
                  : <WatchedPage 
                    user={user}
                    cards={cards}
                    isOnOwnedList={isOnOwnedList}
                    refreshOwnage={refreshOwnage}
                  />
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;