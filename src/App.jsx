import React, { useState, useEffect } from 'react';
import './App.css';
import Card from '/components/Card';

function App() {
  const [cards, setCards] = useState([{
    question: 'food',
    answer: 'src/assets/food_sign.png',
    difficulty: 'easy'
  },
  {
    question: "like",
    answer: "src/assets/like_sign.png",
    difficulty: 'easy'
  },
  {
    question: "don't like",
    answer: "src/assets/don't like_sign.png",
    difficulty: 'easy'
  },
  {
    question: "together",
    answer: "src/assets/together_sign.png",
    difficulty: 'medium'

  },
  {
    question: "right/correct",
    answer: "src/assets/correct_sign.png",
    difficulty: 'easy'
  },
  {
    question: "wrong",
    answer: "src/assets/wrong.gif",
    difficulty: 'easy'
  },
  {
    question: "fall in love",
    answer: "src/assets/fallinlove.gif",
    difficulty: 'medium'
  },
  {
    question: "Christmas",
    answer: "src/assets/christmas.png",
    difficulty: 'hard'
  },
  {
    question: "rainbow",
    answer: "src/assets/rainbow.png",
    difficulty: 'hard'
  },
  {
    question: "old",
    answer: "src/assets/old.png",
    difficulty: 'easy'
  },
  {
    question: "pretty/beautiful",
    answer: "src/assets/beautiful.png",
    difficulty: 'easy'
  },
  {
    question: "wedding",
    answer: "src/assets/wedding.png",
    difficulty: 'medium'
  },
  {
    question: "half hour",
    answer: "src/assets/half-hour-1.gif",
    difficulty: 'medium'
  },
  {
    question: "vacation",
    answer: "src/assets/vacation.png",
    difficulty: 'medium'
  },
  {
    question: "picture",
    answer: "src/assets/picture.gif",
    difficulty: 'hard'
  },
  {
    question: "some",
    answer: "src/assets/some.gif",
    difficulty: 'hard'
  }]);

  const [index, setIndex] = useState(0);
  const [isFlipped, checkIsFlipped] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [seenCards, setSeenCards] = useState([]);

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
    medium: "orange",
    hard: "pink"
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
      <button onClick={handlePrevSwitchCard} disabled={index === 0}> ← </button>
      <button onClick={handleSwitchCard}> → </button>
    </>
  )
}

export default App
