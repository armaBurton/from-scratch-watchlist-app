import RenderListCard from '../RenderListCard/RenderListCard';

export default function ListPage({ 
  cards,
  ownage, 
  isOnOwnedList, 
  refreshOwnage,
  setCards,

}){

  return <div className='pack-of-cards'>
    {
      cards 
        ? cards.map((card, i) => <RenderListCard 
          key={card + i} 
          card={card}
          setCards={setCards}
          ownage={ownage} 
          isOnOwnedList={isOnOwnedList} 
          refreshOwnage={refreshOwnage} 
        />)
        : <></>
    }
  </div>;
}