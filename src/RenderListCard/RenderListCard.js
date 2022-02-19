import { useState } from 'react';
import { addToOwnage } from '../services/fetch-utils';



export default function RenderListCard({ user, card, refreshOwnage, isOnOwnedList }){

  const isOwned = isOnOwnedList(card.id);

  async function handleClick(){
    if (!isOwned){
      const isOwnedObj = {
        dbfId: card.dbfId,
        img: card.img,
      };
      console.log(`|| isOwnedObj >`, isOwnedObj);
      await addToOwnage(isOwnedObj);
      refreshOwnage();
    }
  }

  return (
    card.img === undefined
      ? <></>
      : <div className='card-holder'>
        <img onClick={handleClick} src={card.img} alt={card.name} className={isOwned ? 'owned' : 'not-owned'} />
      </div>
  );
}