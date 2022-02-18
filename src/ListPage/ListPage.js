import { useEffect, useState } from 'react';

export default function ListPage({ user }){
  const [cards, setCards] = useState();

  useEffect(() => {
    async function fetchCards(){
      const response = await fetch(`/.netlify/functions/hearthstone/`);

      // const data = await response.json();
      console.log(`|| response >`, await response.json());
      // console.log(`|| data >`, data);
      // setCards(data);
    }
    fetchCards();
  }, []);
  
  return <div></div>;
}