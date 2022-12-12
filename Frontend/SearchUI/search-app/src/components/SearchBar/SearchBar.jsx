// import React, { useState } from "react";
// import Unsplash, { toJson } from "unsplash-js"

// const unsplash = new Unsplash({
//     accessKey: "hyT_D6ubXqdcEVjTMHZlQeMJbRDXAnWdQqJu4ppsYAk"
// })

// export default function SearchBar(){
//     const [query, setQuery] = useState("");
//     const [pics, setPics] =  useState([]);

//     const searchBar = async (e) => {
//         e.preventDefault();
//         unsplash.search
//         .photos(query, 1, 20)
//         .then(toJson)
//         .then((json) => {
//             setPics(json.results);
//         });
//     };

//     return(
//         <>
//             <form className="form" onSubmit={searchBar}>

//                 <input
//                     type="text"
//                     name="query"
//                     className="input"
//                     placeholder={'Try "dog" or "cat"'}
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                 />
//                 <button type="submit" className="button">
//                     Search
//                 </button>
//             </form>
//             <div className="card-list">
//                 {pics.map((pic) => <div className="card" key={pic.id}>
//                     <img
//                     className="card--image"
//                     alt={pic.alt_description}
//                     src={pic.urls.full}
//                     width="50%"
//                     height="50%"
//                     ></img>
//                 </div>)
//                 }
//             </div>
//         </>
//     );
// }

import React, { useState } from "react";

export default function SearchBar({ setPics }) {
    const [query, setQuery] = useState("");
    
    const searchPhotosFetch = async () => {
        //console.log(query)

        const data = await fetch(
            `https://api.unsplash.com/search/photos?&query=${query}&client_id=hyT_D6ubXqdcEVjTMHZlQeMJbRDXAnWdQqJu4ppsYAk&count=30`
        );
        const dataJson = await data.json();
        const result = dataJson.results;
        //console.log(result);
        setPics(result);
    }
   
    return (
        <div>
            <input
                type="text"
                name="query"
                className="input"
                placeholder={'Type in your search request...'}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <br/>
            <input type="button" className="button" value="Search" onClick={() => searchPhotosFetch()} />
        </div>
    );
}