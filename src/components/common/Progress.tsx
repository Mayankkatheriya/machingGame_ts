import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectScore } from "../../store/scoreSlice";

// Progress component to display the user's progress

const Progress: React.FC = () => {
  // Get the user's score from the Redux store
  const score = useSelector(selectScore);

  return (
    // Container for the progress bar
    <Container>
      {/* Progress bar with width based on the user's score */}
      <div
        className="progress"
        style={{ width: `${(score / 6) * 100}%` }}
      ></div>
      {/* Banana image, showing different images based on the score */}
      <img src={score === 6 ? "banana-3.png" : "banana-2.png"} alt="" />
    </Container>
  );
};

// Styled component for the progress container
const Container = styled.div`
  width: 100%;
  max-width: 600px;
  height: 30px;
  align-self: center;
  margin-top: 30px;
  background-color: #e2f2f5;
  position: relative;
  border-radius: 12px;

  // Styled component for the progress bar
  .progress {
    border-radius: 12px;
    height: 100%;
    width: 0%;
    transition: all 0.2s ease-in-out;
    background-image: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 19px,
      #ffcf25 19px,
      #ffcf25 38px
    );
    background-color: #fce492;
  }

  // Styled component for the banana image
  img {
    position: absolute;
    width: 100px;
    right: -30px;
    top: -20px;
  }
`;

export default Progress;
