import React from "react";
import Meaning from "./Meaning";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import "./Results.css";


export default function Results(props){
  if (props.results){
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <p><FontAwesomeIcon icon={faVolumeXmark} fade className="phonetics"/>  <span className="phonetic-diction">/{props.results.phonetic}/</span></p>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    )
  } else{
    return (null);
  }
}