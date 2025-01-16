import React from "react";
import Meaning from "./Meaning";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeLow } from '@fortawesome/free-solid-svg-icons';
import "./Results.css";


export default function Results(props){
  if (props.results){
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <p><FontAwesomeIcon icon={faVolumeLow} fade/>  /{props.results.phonetic}/</p>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    )
  } else{
    return (null);
  }
}