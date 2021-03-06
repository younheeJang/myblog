import React, { useState } from "react";
import Carousel from 'nuka-carousel';
import axios from 'axios';

const MovieRecent5: React.FC = () => {
  
  let [inputValue, setInputValue] = useState('');
  let [recent5, setRecent5] = useState(null);
 
  const fetchData=async(searchTerm:string)=>{
    const response = await axios.get(`https://www.omdbapi.com/`, {
        params: {
            apikey: 'cd6b223e',
            s: searchTerm,
        }
    });
    if(response.data.Error){
        return [];
    }
    return response.data.Search;
}
const handleChange = async(e) =>{

  if(e.target.value === '') return;
  else { 
     setInputValue(e.target.value);
     fetchData(e.target.value).then((data) => {
     const sortedMovie = data.sort((a,b)=> b.Year - a.Year );
     setRecent5(sortedMovie.slice(0,5));
    })
  }
}

const handleKeyDown = (e) => {
  if(inputValue.length === 1 && e.key === 'Backspace') {setInputValue('')}
}

  return (
    <>
    <input className="input is-link" onKeyDown={handleKeyDown} type="text" placeholder='get recent5 poster on your sear' value={inputValue} onChange={handleChange}></input>
   {recent5&&recent5.length>=1&&
    <Carousel>
        {recent5.map(r => <img key={r.imdbID} src={r.Poster} />)}  
    </Carousel>
   }
    </>
  );
};

export default MovieRecent5;
