import { useState } from 'react';
import { addToOwnage, updateOwnage } from '../services/fetch-utils';



export default function RenderListCard({

  card,
  ownage, 
  refreshOwnage, 
  isOnOwnedList,
  setCards

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

  

  let cardObj = {
    dbfId: card.dbfId,
    img: card.img,
    is_owned: false,
    name: card.name,
    class_name: 'wanted'
  };
  async function handleClick(){
    if (!isOwned) {
      await addToOwnage(cardObj);
      handleClassName(cardObj);
      setOwned('wanted');
    }
    if (isOwned && cardObj.is_owned === false) {
      handleClassName(cardObj);
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

            // : <img onClick={handleClick} src={card.img} alt={card.name} className={owned}/>
        }
      </div>
  );
}