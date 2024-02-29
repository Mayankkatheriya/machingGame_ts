import React from 'react';
import styled from 'styled-components';

// Define types for the Card props
interface CardProps {
  data: {
    id: string;
    image: string;
    name: string;
  };
  type: string;
  isFlipped: boolean;
  isMatched: boolean;
  onCardClick: (cardId: string, cardType: string) => void;
}

// Card component for rendering game cards
const Card: React.FC<CardProps> = ({ data, type, isFlipped, isMatched, onCardClick }) => {
  
  const handleCardClick = () => {
    // Check if the card is not flipped and not matched
    if (!isFlipped && !isMatched) {
      onCardClick(data.id, type);
    }
  };

  return (
    <Container onClick={handleCardClick} isFlipped={isFlipped} isMatched={isMatched}>
      {/* Front of the card */}
      <img src={`${type}Card.png`} alt="" className="front" />

      {/* Back of the card */}
      <div className="back">
        <img src={`plain${type}Card.png`} alt="" className="backCard" />
        {isFlipped && (
          <>
            {type === 'pink' ? (
              <img src={data.image} alt="" className="fruitImg" />
            ) : (
              <h1>{data.name}</h1>
            )}
          </>
        )}
      </div>
    </Container>
  );
};

// Styled component for the card container
const Container = styled.div<{ isFlipped: boolean; isMatched: boolean }>`
  width: 150px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  transform: ${(props) => (props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0)')};
  visibility: ${(props) => (props.isMatched ? 'hidden' : 'visible')};

  &:hover {
    cursor: pointer;
  }

  .front,
  .back {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
  }

  .front {
    z-index: ${(props) => (props.isFlipped ? '1' : '2')};
  }

  .back {
    z-index: ${(props) => (props.isFlipped ? '2' : '1')};
    transform: rotateY(180deg);

    .backCard {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    .fruitImg {
      width: 80px;
      position: absolute;
      top: 100px;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    h1 {
      position: absolute;
      top: 100px;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 3rem;
      font-weight: 900;
      color: #56b000;
      text-shadow: 4px 4px 2px #fff, -4px 4px 2px #fff, -4px -4px 0 #fff,
        4px -4px 0 #fff;
    }
  }
`;

export default Card;
