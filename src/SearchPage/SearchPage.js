import { searchCards } from '../services/fetch-utils';

export default function SearchPage({ search, setSearch, setCards }){

  async function handleSearch(e){
    e.preventDefault();

    setCards(await searchCards(search));
  }

  return (
    <>
      <form className='search' onSubmit={handleSearch}>
        Search:&nbsp;
        <input required type='text' id='search-bar' value={search} onChange={e => setSearch(e.target.value)} />
      </form>
    </>
  );
}