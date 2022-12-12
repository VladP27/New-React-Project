import SearchItem from "./SearchItem"
import "./SearchResults.css"

export default function SerchResults({pics}){
  const SearchResults=pics.map((pic) => (
    <SearchItem item = {pic} key={pic.id} />
  ));

  return (
    <div className="Map">
      {SearchResults}
    </div>
  )
}