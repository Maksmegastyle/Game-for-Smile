import React, { useState } from 'react';

// Настроение и его соответствующие иконки
const moodOptions = [
  { mood: "Happy", emoji: "😄" },
  { mood: "Sad", emoji: "😢" },
  { mood: "Excited", emoji: "😎" },
  { mood: "Angry", emoji: "😡" },
  { mood: "Surprised", emoji: "😲" },
  { mood: "Bored", emoji: "😐" }
];

function MoodGame() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // Обработчик выбора настроения
  const handleMoodSelection = (mood) => {
    setSelectedMood(mood);
    setShowResult(true);
  };

  return (
    <div>
      <h2>How are you feeling today?</h2>
      {!showResult ? (
        <div>
          {moodOptions.map((option) => (
            <button
              key={option.mood}
              onClick={() => handleMoodSelection(option)}
              style={{
                fontSize: '24px',
                margin: '10px',
                padding: '10px 20px',
                cursor: 'pointer'
              }}
            >
              {option.emoji}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h3>Your Mood is: {selectedMood.mood} {selectedMood.emoji}</h3>
          <button
            onClick={() => setShowResult(false)}
            style={{
              padding: '10px 20px',
              fontSize: '18px',
              marginTop: '20px',
              cursor: 'pointer'
            }}
          >
            Choose Again
          </button>
        </div>
      )}
    </div>
  );
}

export default MoodGame;
