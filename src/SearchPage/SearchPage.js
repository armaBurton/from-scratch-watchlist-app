import { searchCards } from '../services/fetch-utils';

export default function SearchPage({ search, setSearch, setCards, setLocation }){

  async function handleSearch(e){
    e.preventDefault();

    const query = await searchCards(search);
    query.error === 404 
      ? alert(`No such Query exists`)
      : setCards(await searchCards(search));
  }

  setLocation('/list-page');

  return (
    <>
      <form className='search' onSubmit={handleSearch}>
        Search:&nbsp;
        <input required type='text' id='search-bar' value={search} onChange={e => setSearch(e.target.value)} />
      </form>
    </>
  );
}