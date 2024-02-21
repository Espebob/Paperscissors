// Get the user's choice
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase(); 
  //Convert userInput to lowercase
    
    
  //Check if userInput is valid
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error! Invalid input.');
    }
  };
  
  //Get the computer's choice
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
  };
  
  //Determine the winner
  const determineWinner = (userChoice, computerChoice) => {
    //Handle the cheat code 'bomb'
    if (userChoice === 'bomb') {
      return 'You won! (cheat code detected)';
    }
    
    //Handle tie
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    }
    
    // Check for all other scenarios
    if (userChoice === 'rock') {
      return computerChoice === 'paper' ? 'The computer won!' : 'You won!';
    } else if (userChoice === 'paper') {
      return computerChoice === 'scissors' ? 'The computer won!' : 'You won!';
    } else if (userChoice === 'scissors') {
      return computerChoice === 'rock' ? 'The computer won!' : 'You won!';
    }
  };
  
  //Start the game and log the results
  const playGame = () => {
    const userChoice = getUserChoice('rock'); 
    
    // You can pass 'rock', 'paper', 'scissors', or 'bomb'
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  //Start the game
  playGame();