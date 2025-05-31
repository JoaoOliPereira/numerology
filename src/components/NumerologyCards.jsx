import React, { useState } from 'react';
import { explanations } from '../utils/explanations';
import Modal from './Modal';
import { getRandomGradient, getTextColor } from '../utils/gradientcolors';
import './NumerologyCards.css';

const NumerologyCards = ({ results, mode }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (title) => {
    setSelectedCard(title);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="numerology-grid">
      {results && Object.entries(results).map(([key, value], index) => {
        const bg = getRandomGradient();
        const color = getTextColor(bg);
        return (
          <div
            key={index}
            className="numerology-card"
            style={{ background: bg, color }}
            onClick={() => handleCardClick(key)}
          >
            <h2>{key}</h2>
            <p>{Array.isArray(value) ? value.join(', ') : value}</p>
          </div>
        );
      })}

      {selectedCard && (
        <Modal onClose={closeModal}>
          <h2>{selectedCard}</h2>
          <p>
            {mode === 'deep'
              ? explanations[selectedCard]?.deep
              : explanations[selectedCard]?.simple}
          </p>
        </Modal>
      )}
    </div>
  );
};

export default NumerologyCards;