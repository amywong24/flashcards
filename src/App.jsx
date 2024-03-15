import React, { useState, useEffect } from 'react';
import './App.css';
import Card from '/components/Card';

function App() {
  const [cards, setCards] = useState([{
    answer: 'food',
    question: 'src/assets/food_sign.png',
    difficulty: 'easy'
  },
  {
    answer: "like",
    question: "src/assets/like_sign.png",
    difficulty: 'easy'
  },
  {
    answer: "don't like",
    question: "src/assets/don't like_sign.png",
    difficulty: 'easy'
  },
  {
    answer: "together",
    question: "src/assets/together_sign.png",
    difficulty: 'medium'

  },
  {
    answer: "right/correct",
    question: "src/assets/correct_sign.png",
    difficulty: 'easy'
  },
  {
    answer: "wrong",
    question: "src/assets/wrong.gif",
    difficulty: 'easy'
  },
  {
    answer: "fall in love",
    question: "src/assets/fallinlove.gif",
    difficulty: 'medium'
  },
  {
    answer: "Christmas",
    question: "src/assets/christmas.png",
    difficulty: 'hard'
  },
  {
    answer: "rainbow",
    question: "src/assets/rainbow.png",
    difficulty: 'hard'
  },
  {
    answer: "old",
    question: "src/assets/old.png",
    difficulty: 'easy'
  },
  {
    answer: "pretty/beautiful",
    question: "src/assets/beautiful.png",
    difficulty: 'easy'
  },
  {
    answer: "wedding",
    question: "src/assets/wedding.png",
    difficulty: 'medium'
  },
  {
    answer: "half hour",
    question: "src/assets/half-hour-1.gif",
    difficulty: 'medium'
  },
  {
    answer: "vacation",
    question: "src/assets/vacation.png",
    difficulty: 'medium'
  },
  {
    answer: "picture",
    question: "src/assets/picture.gif",
    difficulty: 'hard'
  },
  {
    answer: "some",
    question: "src/assets/some.gif",
    difficulty: 'hard'
  }]);

  const [index, setIndex] = useState(0);
  const [isFlipped, checkIsFlipped] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [seenCards, setSeenCards] = useState([]);
  const [inputClass, setInputClass] = useState('');

  const randomCards = () => {
    const random = [...cards];

    const firstCard = random.shift();

    for (let i = random.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [random[i], random[j]] = [random[j], random[i]];
    }

    random.unshift(firstCard);

    return random;
  };

  useEffect(() => {
    setCards(randomCards());
  }, []);

  const handleSwitchCard = () => {
    if (index === cards.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    checkIsFlipped(false);
  };

  const handlePrevSwitchCard = () => {
    if (index === 0) {
      // Do nothing if on the first card
      return;
    } else {
      setIndex(index - 1); // Decrement index to go to the previous card
    }
    checkIsFlipped(false); // Reset flipped state
  };


  const difficultyColors = {
    easy: "lightgreen",
    medium: "lightblue",
    hard: "pink"
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const checkAnswer = () => {
    // Get the correct answer for the current card
    const correctAnswer = cards[index].answer.toLowerCase();

    // Convert user input to lowercase for case-insensitive comparison
    const guess = userInput.toLowerCase();

    // Check if the guess is correct
    const isCorrectGuess = guess === correctAnswer;

    // Apply appropriate CSS class based on correctness of the guess
    const newInputClass = isCorrectGuess ? 'correct' : 'incorrect';

    // Update the inputClass state variable
    setInputClass(newInputClass);

    // Clear the input field after submission
    setUserInput('');
  };


  return (
    <>
      <div className='header'>
        <h2>Study American Sign Language Flashcards</h2>
        <h4>Getting ready for your first ASL exam? Here are some flashcards to help you study!</h4>
        <h5>Number of Cards: {cards.length - 1}</h5>
      </div>
      <Card
        question={cards[index].question}
        answer={cards[index].answer}
        isFlipped={isFlipped}
        checkIsFlipped={checkIsFlipped}
        color={difficultyColors[cards[index].difficulty]} />
      {/* guess section */}
      <div className='guess-area'>
        <p>Make your guess here: </p>
        <input
          type='text'
          name='answer'
          value={userInput}
          placeholder='Answer'
          onChange={handleInputChange}
          className={`guess-input ${inputClass}`}></input>
        <button id='submit' onClick={checkAnswer}>Submit</button>
      </div>
      <button id="prev" onClick={handlePrevSwitchCard} disabled={index === 0}> ← </button>
      <button id="next" onClick={handleSwitchCard}> → </button>
    </>
  )
}

export default App
