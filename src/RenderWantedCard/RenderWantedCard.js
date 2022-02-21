import { updateOwnage } from '../services/fetch-utils';

export default function RenderWantedCard({ want, refreshOwnage }){

  async function handleClick(){
    await updateOwnage(want.dbfId);
    await refreshOwnage();
  }

  return (
    <div className='watched-card-holder'>
      <img onClick={handleClick} src={want.img} alt={want.name} className='wanted wanted-card-holder'/>
    </div>
  );
}