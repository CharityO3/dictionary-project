import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionarry(){
  let [keyword, setKeyword]= useState(" ");
  let [results, setResults]= useState(null);

  function handleResponse(response){
    setResults(response.data);
  }

  function handleKeywordChange(event){
    setKeyword(event.target.value);
  }

  function Search(event){
    event.preventDefault();

    let apiKey =`b125a59f9afa4ebc141352te1ao60a9c`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return(
    <div className="Dictionary">
      <form onSubmit = {Search}>
        <input type="search" onChange={handleKeywordChange}/>
        <input type="submit" value="Search" />
      </form>
      <Results results ={results}/>
    </div>
  );
}