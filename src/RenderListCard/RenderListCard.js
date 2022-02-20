import { useState, useEffect } from 'react';
import { addToOwnage, updateOwnage } from '../services/fetch-utils';



export default function RenderListCard({

  user, 
  card, 
  refreshOwnage, 
  isOnOwnedList, 

}){
  const [owned, setOwned] = useState({});

  const isOwned = isOnOwnedList(card.dbfId);


  async function handleClassName(obj){
    if (obj.is_owned === true){
      setOwned('owned');
    } else if (obj.is_owned === false) {
      setOwned('wanted');
    } else {
      setOwned('');
    }
    refreshOwnage();
  }

  
  async function handleClick(){
    if (!isOwned) {
      const isOwnedObj = {
        dbfId: card.dbfId,
        img: card.img,
        is_owned: false,
        name: card.name
      };
      addToOwnage(isOwnedObj);
      handleClassName(isOwnedObj);
      refreshOwnage();
    }
    if (isOwned) {
      await updateOwnage(card.dbfId);
      card.is_owned = true;
      handleClassName(card);
      refreshOwnage();
    }
  }

  return (
    card.img === undefined
      ? <></>
      : <div className='card-holder'>
        <img onClick={handleClick} src={card.img} alt={card.name} className={owned}/>
      </div>
  );
}