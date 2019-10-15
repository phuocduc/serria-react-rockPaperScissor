import ChoiceButtons from "./modules/ChoiceButton";
import { CHOICES, getRoundOutcome } from "./utils";
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ChoiceCard from './modules/ChoiceCard'



function Main() {
  
  const [prompt, setGamePrompt] = useState('--');
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  // console.log('123',[computerChoice])
  const [previousWinner, setPreviousWinner] = useState(null);

  const [gameHistory, setGameHistory] = useState([])

  
  // console.log('history',[gameHistory,setGameHistory])

  const onPlayerChoose = playerChoice =>{
 

    const [result,comChoice] = getRoundOutcome(playerChoice)
    const newUserChoice = CHOICES[playerChoice];
    const newComputerChoice = CHOICES[comChoice];

    if (result === "Victory!") {
      setPreviousWinner("You");
    } else if (result === "Defeat!") {
      setPreviousWinner("Computer");
    } else {
      setPreviousWinner("Tie");
    }
   

  setPlayerChoice(newUserChoice);
  setComputerChoice(newComputerChoice);

  setGamePrompt(result);
  
  gameHistory.push(result)
  setGameHistory(gameHistory);
  
}
 
  return (
    <div className="App">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-8 themed-grid-col"></div>
          <h1>{prompt}</h1>
          <ChoiceCard title="Computer" winner={true} previousWinner={previousWinner} imgURL={computerChoice && computerChoice.url}/>
         
          <ChoiceCard title="You" winner={false} previousWinner={previousWinner} imgURL={playerChoice && playerChoice.url}/>
          <ChoiceButtons onPlayerChoose={onPlayerChoose} />
        </div>
        <div className="col-md-4 themed-grid-col">
  <h3>History</h3>
  <ul>
    {gameHistory.map(result => {
      return <li>{result}</li>;
    })}
  </ul>
</div>
      </div>
    </div>
  );
}

// function App() {
//   const [isSignIn,setSignedIn] = useState(false)
//   return ( 
//   //  <Main />
//     <div>sdfesfs</div>
//   )
// }

export default Main;
