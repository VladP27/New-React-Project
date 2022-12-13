import SearchItem from "./SearchItem"
import "./SearchResults.css"

export default function SerchResults({pics}){
  const SearchResults=pics.map((pic) => 
  <div className="card">
    <SearchItem item = {pic} key={pic.id} />
  </div>
  );

  return (
    <div className="ResultsList">
      <div className="Map">
        {SearchResults}
      </div>
    </div>
  )
}