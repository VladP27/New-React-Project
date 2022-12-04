import React, { useState } from "react";
import { createApi } from "unsplash-js";
// create ACCESS key and "hide" it in ../access_key.js (add to .gitignore)
//import { ACCESS } from '../access_key';

const unsplash = createApi({ accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY });

export default function SearchBar({ setPics }) {
    const [query, setQuery] = useState("");
    
    const searchPhotosFetch = async () => {
        //console.log(query)
        const data = await fetch(
            `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
        );
        const dataJson = await data.json();
        const result = dataJson.results;
        //console.log(result);
        setPics(result);
    }

    // npm install unsplash-js
    const searchPhotosJS = async () => {
        unsplash.search.getPhotos({
            query: query,
            perPage: 20,
        }).then((result) => {
            //console.log(result);
            setPics(result.response.results);
        });
    };

    return (
        <div>
            <input
                type="text"
                name="query"
                className="input"
                placeholder={"Suchbegriff z.B. 'Hund' oder 'Katze'"}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <br/>
            <input type="button" className="button" value="Suche JS" onClick={() => searchPhotosJS()} />
            <input type="button" className="button" value="Suche Fetch" onClick={() => searchPhotosFetch()} />
        </div>
    );
}
