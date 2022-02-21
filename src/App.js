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
import { getUser, logout, getOwnage, searchCards } from './services/fetch-utils';
import SearchPage from './SearchPage/SearchPage';
import WatchedPage from './WatchedPage/WatchedPage';
import RenderListCard from './RenderListCard/RenderListCard';

function App() {
  const [user, setUser] = useState();
  const [search, setSearch] = useState('');
  const [cards, setCards] = useState();
  const [ownage, setOwnage] = useState([]);
  const [page, setPage] = useState();
  const [location, setLocation] = useState('/link-page');

  useEffect(() => {
    async function getUserData(){
      const data = await getUser();
      setUser(data);
    }
    getUserData();
    refreshOwnage();
  }, []);

  function handleLogout(){
    logout();
    setUser('');
  }

  async function refreshOwnage(){
    const myOwnage = await getOwnage();

    setOwnage(myOwnage);
  }
 
  function isOnOwnedList(dbfId){
    const match = ownage.find(card => Number(card.dbfId) === Number(dbfId));

    return Boolean(match);
  }

  console.log(`|| location >`, location);

  function handleLocation(){
    setLocation('/list-page');
  }

  console.log(`|| location >`, location);

  return (
    <Router>
      <div>
        {
          !user 
            ? <header></header>
            : <header>
              <ul>
                <li>
                  {
                    location === '/watched-cards' 
                      ? <NavLink to='/list-page' onClick={handleLocation} >Search</NavLink>
                      : <SearchPage search={search} setSearch={setSearch} setCards={setCards} setLocation={setLocation} />
                  }
                </li>
                <li>
                  <NavLink activeClassName='active' to='/watched-cards' setCards={setCards} setSearch={setSearch} >Watched Cards</NavLink>
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
            <Route exact path='/list-page'>
              {
                !user
                  ? <Redirect to='/' />
                  : <ListPage 
                    user={user} 
                    cards={cards} 
                    isOnOwnedList={isOnOwnedList} 
                    refreshOwnage={refreshOwnage} 
                  />
              }
            </Route>
            <Route exact path='/watched-cards'>
              {
                !user
                  ? <Redirect to='/' />
                  : <WatchedPage 
                    ownage={ownage}
                    refreshOwnage={refreshOwnage}
                    setLocation={setLocation}
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