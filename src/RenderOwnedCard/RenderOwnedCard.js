export default function RenderOwnedCard({ owned }){

  return (
    <div className='watched-card-holder'>
      <img src={owned.img} alt={owned.name} className='owned'/>
    </div>
  );
}