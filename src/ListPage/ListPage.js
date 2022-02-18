import { useEffect, useState } from 'react';
import { getCards } from '../services/fetch-utils';


console.log(`list-page`);

export default function ListPage({ user }){
  const [cards, setCards] = useState();

  useEffect(() => {
    async function fetchCards(){
      const response = await fetch(`/.netlify/functions/hearthstone/card?`);
      const data = await response.json();
      setCards(data);
    }
    fetchCards();
  }, []);

  return <></>;
}