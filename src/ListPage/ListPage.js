import RenderListCard from '../RenderListCard/RenderListCard';

export default function ListPage({ user, cards }){

  return <div className='pack-of-cards'>
    {
      cards 
        ? cards.map((card, i) => <RenderListCard key={card + i} card={card} />)
        : <></>
    }
  </div>;
}