import React from "react";
import styled from "styled-components";

interface MonkeyProps {
  text: string;
}

const Monkey: React.FC<MonkeyProps> = ({ text }) => {
  return (
    <Container>
      <div className="message">
        <img src="/messagebox.png" alt="" />
        <h2>{text}</h2>
      </div>
      <MonkeyImg src="/happyMonkey.png" alt="" />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;

  .message {
    position: absolute;
    right: -200px;
    top: -100px;

    img {
      width: 100%;
      max-width: 400px;
    }

    h2 {
      width: 70%;
      position: absolute;
      z-index: 10;
      top: 35%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      font-weight: 900;
      color: #11aec6;
    }
  }
`;

const MonkeyImg = styled.img`
  width: 100%;
  max-width: 400px;
`;

export default Monkey;
