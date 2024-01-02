// Deck.js

import React, { useState } from 'react';
import '../Style/deck.css'; // Crie um arquivo CSS para estilizar o componente

const Deck = ({ links }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="deck">
      {links.map((image,cardIndex) => (
        <div
          key={cardIndex}
          className={`card ${hoveredCard === cardIndex ? 'hovered' : ''} ${
            cardIndex === 0 ? 'tilted-left' : cardIndex === 2 ? 'tilted-right' : ''
          }`}          
          onMouseEnter={() => handleCardHover(cardIndex)}
          onMouseLeave={handleCardLeave}
          // style={{ marginLeft: `${(cardIndex - 1) * -30}px` }}
          style={{ marginLeft: cardIndex === 0 ? '0px' : '-30px', zIndex: cardIndex === 1 ? +1 : "" }}
        >
          <img src={image} alt={`Card ${cardIndex}`} />
        </div>
      ))}
    </div>
  );
};

export default Deck;
