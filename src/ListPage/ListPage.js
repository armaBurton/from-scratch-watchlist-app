import RenderListCard from '../RenderListCard/RenderListCard';

export default function ListPage({ 
  cards,
  ownage, 
  isOnOwnedList, 
  refreshOwnage, 

}){

  console.log(`|| cards >`, cards[0]);

  return <div className='pack-of-cards'>
    {
      cards 
        ? cards.map((card, i) => <RenderListCard 
          key={card + i} 
          card={card}
          ownage={ownage} 
          isOnOwnedList={isOnOwnedList} 
          refreshOwnage={refreshOwnage} 
        />)
        : <></>
    }
  </div>;
}