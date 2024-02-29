import React from "react";
import Progress from "./common/Progress";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectScore, setScore } from "../store/scoreSlice";
import { useNavigate } from "react-router-dom";

// Result component to display the user's score and allow them to restart the game

const Result: React.FC = () => {
  const dispatch = useDispatch();
  const score = useSelector(selectScore);
  const navigate = useNavigate();

  // Restart the game by resetting the score and navigating to the instructions screen
  const restartGame = () => {
    dispatch(setScore(0));
    navigate("/instructions");
  }

  return (
    <>
      <Overlay></Overlay>
      <Progress />
      <Container>
        {/* ResultCard styled component for the result card layout */}
        <ResultCard>
          <img src="/topDesign.png" alt="" className="topScore" />
          <div className="scoreText">
            <p>Earned</p>
            <p>{score} Banana's</p>
          </div>
          <img src="/happyMonkey2.png" alt="" className="monkeyImg" />
          {/* Restart button with an onClick handler to restart the game */}
          <img src="/restart.png" alt="" className="restartbtn" onClick={restartGame} />
        </ResultCard>
      </Container>
    </>
  );
};

// Container styled component to center the result card
const Container = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// ResultCard styled component for the result card layout
const ResultCard = styled.div`
  width: 350px;
  height: 350px;
  background-color: #fff5d1;
  box-shadow: 0 1px 0 1px #ffc977;
  border-radius: 30px;
  padding: 2rem 10px 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .topScore {
    width: 420px;
    position: absolute;
    top: -40px;
    z-index: 2;
  }

  .scoreText {
    position: absolute;
    z-index: 3;
    text-align: center;
    color: #fff;
    font-weight: 800;
    top: -20px;

    p {
      &:first-child {
        font-size: 1.5rem;
        font-weight: 600;
      }

      &:last-child {
        font-size: 2.5rem;
      }
    }
  }

  .monkeyImg {
    margin-top: auto;
    width: 180px;
  }

  .restartbtn {
    width: 100%;
    cursor: pointer;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #00000092;
  z-index: -1;
`;
export default Result;
