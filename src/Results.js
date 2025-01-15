import React from "react";
import Meaning from "./Meaning";

export default function Results(props){
 // console.log(props.results);
  if (props.results){
    //let firstMeaning = props.results.meanings[0];
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
        Hello from results
      </div>
    )
  } else{
    return (null);
  }
}