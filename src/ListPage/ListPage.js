import RenderListCard from '../RenderListCard/RenderListCard';

export default function ListPage({ 
  user, 
  cards, 
  isOnOwnedList, 
  refreshOwnage, 

}){

  return <div className='pack-of-cards'>
    {
      cards 
        ? cards.map((card, i) => <RenderListCard 
          key={card + i} 
          user={user} 
          card={card} 
          isOnOwnedList={isOnOwnedList} 
          refreshOwnage={refreshOwnage} 
        />)
        : <></>
    }
  </div>;
}