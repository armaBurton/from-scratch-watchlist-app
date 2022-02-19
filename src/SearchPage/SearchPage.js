import { searchCards } from '../services/fetch-utils';
import { useState } from 'react';

export default function SearchPage({ search, setSearch, setCards }){
  // const [search, setSearch] = useState();

  console.log(`|| search >`, search);

  async function handleSearch(e){
    e.preventDefault();

    const cards = await searchCards(search);
    setCards(cards);
  }

  return (
    <>
      <form onSubmit={handleSearch}>
        Search:&nbsp;
        <input type='text' value={search} onChange={e => setSearch(e.target.value)} />
      </form>
    </>
  );
}