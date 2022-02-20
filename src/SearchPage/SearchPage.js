import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
} from 'react-router-dom';
import { searchCards } from '../services/fetch-utils';

export default function SearchPage({ search, setSearch, setCards }){

  async function handleSearch(e){
    e.preventDefault();
    const cards = await searchCards(search);
    setCards(cards);
  }

  return (
    <>
      <form className='search' onSubmit={handleSearch}>
        Search:&nbsp;
        <input type='text' value={search} onChange={e => setSearch(e.target.value)} />
      </form>
    </>
  );
}