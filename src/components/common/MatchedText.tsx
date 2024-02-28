import React from "react";
import styled from "styled-components";

const MatchedText: React.FC = () => {
  return (
    <MatchedContainer>
      <h1>It's a Match!</h1>
    </MatchedContainer>
  );
};

const MatchedContainer = styled.div`
  position: fixed;
  top: 30px;
  right: 50px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  z-index: 999;
  text-align: center;

  h1 {
    font-size: 24px;
    color: #56b000;
  }
`;

export default MatchedText;
