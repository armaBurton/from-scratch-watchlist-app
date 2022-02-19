import RenderListCard from '../RenderListCard/RenderListCard';

export default function ListPage({ user, cards, refreshOwnage, isOnOwnedList }){

  return <div className='pack-of-cards'>
    {
      cards 
        ? cards.map((card, i) => <RenderListCard key={card + i} user={user} card={card} refreshOwnage={refreshOwnage} isOnOwnedList={isOnOwnedList} />)
        : <></>
    }
  </div>;
}