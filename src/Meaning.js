import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meanings(props){
  return(
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="definition"> {props.meaning.definition}</div>
      <div className="example">{props.meaning.example}</div>
      <p><Synonyms synonyms= {props.meaning.synonyms}/></p>

    </div>
  );
}
  


