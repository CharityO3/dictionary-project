import React from "react";
import "./Synonyms.css";

export default function Synonyms(props){
  if (props.synonyms){
    return(
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
        return <li key={index}>{synonym}
        {index < props.synonyms.length -1 ? ", ": ""}</li>;
       })}
      </ul>
    );
  } else{
    return null;
  }
}