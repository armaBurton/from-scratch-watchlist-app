import RenderWantedCard from '../RenderWantedCard/RenderWantedCard';
import RenderOwnedCard from '../RenderOwnedCard/RenderOwnedCard';

export default function WatchedPage({ 
  ownage, 
  // refreshOwnage, 
  setLocation 
}){
  const ownArr = [];
  const wantArr = [];

  ownage.map(own => {
    own.is_owned ? ownArr.push(own) : wantArr.push(own);
  });

  setLocation('/watched-cards');

  return (

    <div>
      <div className="divider">
        <div className="is-wanted">
          <h1>Wanted</h1>
          <div className="holder">
            {
              wantArr.map((want, i) => <RenderWantedCard 
                key={want + i} 
                want={want} 
                // refreshOwnage={refreshOwnage} 
              />)
            }
          </div>
        </div>
        <div className="is-owned">
          <h1>Owned</h1>
          <div className="holder">
            {
              ownArr.map((owned, i) => <RenderOwnedCard key={owned + i} owned={owned} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
}