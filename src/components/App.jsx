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

[isAnswered, setIsAnswered] = useState(true);
  
return ( 

  <div className="app">   

  

  <h1>Trivia</h1>
      <Question name={data[0].question.text} Answername={data[0].question.choices}/>


      <NextQuestion/> 

      <button onClick={ 
    () => setIsAnswered(isAnswered + "The correct answer is..."  ) 
      }>  
      {isAnswered}
    </button>  
    
  </div>  
) 


   
} 


export default App;
