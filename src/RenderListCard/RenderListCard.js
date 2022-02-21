import { useState } from 'react';
import { addToOwnage, updateOwnage } from '../services/fetch-utils';

export default function RenderListCard({

  card,
  refreshOwnage, 
  isOnOwnedList,

}){
  const [owned, setOwned] = useState('wanted');
  const isOwned = isOnOwnedList(card.dbfId);

  let cardObj = {
    dbfId: card.dbfId,
    img: card.img,
    is_owned: false,
    name: card.name,
    class_name: owned
  };
  async function handleClick(){
    if (!isOwned) {
      await addToOwnage(cardObj);
      setOwned('wanted');
    }
    if (isOwned && cardObj.is_owned === false) {
      setOwned('owned');
      await updateOwnage(card.dbfId);
    }
    await refreshOwnage();
  }
  
  return (
    card.img === undefined
      ? <></>
      : <div className='card-holder'>
        {
          isOwned 
            ? isOwned.is_owned === true
              ? <img onClick={handleClick} src={card.img} alt={card.name} className='owned'/>
              : <img onClick={handleClick} src={card.img} alt={card.name} className='wanted'/>
            : <img onClick={handleClick} src={card.img} alt={card.name} className=''/>
        }
      </div>
  );
}