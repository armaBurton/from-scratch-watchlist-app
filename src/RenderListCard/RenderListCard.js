export default function RenderListCard({ card }){


  return (
    card.img === undefined
      ? <></>
      : <div className='card-holder'>
        <img src={card.img} alt={card.name} />
      </div>
  );
}