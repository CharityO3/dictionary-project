import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionarry(){
  let [keyword, setKeyword]= useState(" ");

  function handleResponse(response){
    console.log(response.data);
    //console.log(response.data.word);
    //console.log(response.data.phonetic);
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
    </div>
  )
}