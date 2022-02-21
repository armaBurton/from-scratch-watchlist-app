import { useState } from 'react';
import { addToOwnage, updateOwnage } from '../services/fetch-utils';



export default function RenderListCard({

  card,
  own, 
  refreshOwnage, 
  isOnOwnedList, 

}){
  const [owned, setOwned] = useState();

  const isOwned = isOnOwnedList(card.dbfId);

  async function handleClassName(obj){
    console.log(`|| obj.is_owned >`, obj.is_owned);
    if (obj.is_owned === true){
      setOwned('owned');
    } else if (obj.is_owned === false) {
      setOwned('wanted');
    } else {
      setOwned('');
    }
    await refreshOwnage();
  }

  async function handleClick(){
    if (!isOwned) {
      const isOwnedObj = {
        dbfId: card.dbfId,
        img: card.img,
        is_owned: false,
        name: card.name,
        class_name: 'is-wanted'
      };
      addToOwnage(isOwnedObj);
      handleClassName(isOwnedObj);
      setOwned('wanted');
      refreshOwnage();
    }
    if (isOwned) {
      await updateOwnage(card.dbfId);
      card.is_owned = true;
      handleClassName(card);
      setOwned('owned');
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