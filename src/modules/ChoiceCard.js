import React from 'react'



export default function ChoiceCard(props) {
const DEFAULT_IMG =
  "http://www.thewateringhole.co.uk/wp-content/uploads/2012/12/play.png";

    const won = props.title === props.previousWinner;
    let className;
    const hasPreviousGame=
    props.previousWinner === "Computer" || props.previousWinner === "You";
    if(hasPreviousGame)
    {
        className = won ? "winner" : "loser";
    }

    let prompt;
    if(won)
    {
        prompt = "won"
        className = won ? "winner" : "loser"

    }
    else if(props.previousWinner === "Tie"){
        prompt = "Tie"
    }
    else if(props.previousWinner === null)
    {
        prompt = "start"
    }
    else{
        prompt= "Lose"
    }
    return (
        <div className={`choice-card ${className}`}>
            <h1>{props.title}</h1>
            <img src={props.imgURL || DEFAULT_IMG} alt={props.title}/>
            <h3>{prompt}</h3>
        </div>
    )
}
