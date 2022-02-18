import { useEffect, useState } from 'react';

export default function ListPage({ user }){
  const [cards, setCards] = useState();
  console.log(`|| user >`, user);
  console.log(process.env.REACT_APP_X_RAPIDAPI_HOST);
  console.log(process.env.REACT_APP_X_RAPIDAPI_KEY);


  useEffect(() => {
    async function fetchCards(){
      const response = await fetch(`/.netlify/functions/hearthstone/`);

      const data = await response.json();
      console.log(`|| data >`, data);
      setCards(data);
    }
    fetchCards();
  }, []);
  
  return <div>{cards}</div>;
}