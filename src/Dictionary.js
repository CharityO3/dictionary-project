import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionarry(){
  let [keyword, setKeyword]= useState(" ");

  function handleKeywordChange(event){
    setKeyword(event.target.value);
  }
  function Search(event){
    event.preventDefault();
    alert(`Searching for the definition of ${keyword}...`);
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