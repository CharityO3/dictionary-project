import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionarry(props){
  let [keyword, setKeyword]= useState(props.defaultKeyword);
  let [results, setResults]= useState(null);
  let [loaded, setLoaded]= useState(false);

  function handleResponse(response){
    console.log(response.data);
    setResults(response.data);
  }

  function handleKeywordChange(event){
    setKeyword(event.target.value);
  }

  function search(){
    let apiKey =`b125a59f9afa4ebc141352te1ao60a9c`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
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
      </div>
    );
  } else{
    load();
    return "Loading";
  }

}