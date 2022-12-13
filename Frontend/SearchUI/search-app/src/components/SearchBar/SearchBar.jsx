import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar({ setPics }) {
    const [query, setQuery] = useState("");
    
    const searchPhotosFetch = async () => {
        //console.log(query)

        const data = await fetch(
            `https://api.unsplash.com/search/photos?&query=${query}&per_page=20&client_id=hyT_D6ubXqdcEVjTMHZlQeMJbRDXAnWdQqJu4ppsYAk`
        );
        const dataJson = await data.json();
        const result = dataJson.results;
        //console.log(result);
        setPics(result);
    }
   
    return (
        <div className="InputGroup">
            <input
                type="text"
                name="query"
                className="inputBar"
                placeholder={'Hier eingeben wonach du suchst...'}
                value={query} 
                onChange={(e) => setQuery(e.target.value)}
            />
            <input type="button" className="button" value="Suchen" onClick={() => searchPhotosFetch()} />
        </div>
    );
}