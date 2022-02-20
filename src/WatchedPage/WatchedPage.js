import { logDOM } from '@testing-library/react';
import ListPage from '../ListPage/ListPage';

export default function WatchedPage({ setCards }){

  const cards = [{
    dbfId: 0,
    img: '0',
    is_owned: false,
    name: ''
  }];
  
  setCards({});
  console.log(`here`);
  return (

    <div>
      
    </div>
  );
}