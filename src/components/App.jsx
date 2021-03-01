import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";




function Question(props) { 

    return(
  
  <div>{props.name}   
{
  props.Answername.map((Answername) => { 
    return ( 
      <Answer name={Answername} />   
      ) 
  }) 
}
    </div>  
    );
}

function NextQuestion(props) { 

  return<button>Next Question</button>;
} 

function Answer(props) { 

  return<div>{props.name}</div>; 

} 


function App() {  

let currentQuestion = 0;
  
return (   


  <div className="app"> 
  <h1>Trivia</h1>
      <Question name={data[0].question.text} Answername={data[0].question.choices}/>


      <NextQuestion/>
  </div>  
) 


   
} 


export default App;
