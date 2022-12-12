import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResultsList';


function App() {
  const [pics, setPics] = useState([]);

  return (
    <div className="App">
      <Header/>
      <SearchBar setPics ={setPics}/>
      <SearchResults pics = {pics}/>
    </div>
  );
}

export default App;
