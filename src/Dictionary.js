import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionarry(props){
  let [keyword, setKeyword]= useState(props.defaultKeyword);
  let [results, setResults]= useState(null);
  let [loaded, setLoaded]= useState(false);
  let [photos, setPhotos]= useState(null);

  function handleResponse(response){
    setResults(response.data);
  }

  function handleImageDisplay(response){
    setPhotos(response.data.photos);
  }

  function handleKeywordChange(event){
    setKeyword(event.target.value);
  }

  function search(){
    let apiKey =`b125a59f9afa4ebc141352te1ao60a9c`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let imagesApiKey = "b125a59f9afa4ebc141352te1ao60a9c";
    let imagesApiUrl= `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imagesApiKey}`;
    axios.get(imagesApiUrl).then(handleImageDisplay);
  }

  function handleSubmit(event){
    event.preventDefault();
    search();

  }

  function load(){
    setLoaded(true);
    search();
  }

  if (loaded){
    return(
      <div className="Dictionary">
        <section> 
          <h1>What word do you want to look up?</h1>
          <form onSubmit = {handleSubmit}>
            <input type="search" onChange={handleKeywordChange} defaultValue ={props.defaultKeyword}/>
          </form>
          <div className="hint">
            Suggested words: sunset, wine, yoga, plant...
          </div>
        </section>
        <Results results ={results}/>
        <Photos photos={photos}/>
      </div>
    );
  } else{
    load();
    return "Loading";
  }

}