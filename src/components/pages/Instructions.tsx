import React from 'react';
import BottomButton from "../common/BottomButton";
import Progress from "../common/Progress";
import BackButton from "../common/BackButton";
import styled from 'styled-components';
import InstructCard from '../common/InstructCard';

// Instructions component providing guidance to the user

const Instructions: React.FC = () => {
  return (
    <>
      <Progress />
      <CardContainer>
        {/* InstructCard component for pink card instructions */}
        <InstructCard card="pink" number={1} text1="Select a pink card." text2="It has images." />
        {/* InstructCard component for blue card instructions */}
        <InstructCard card="blue" number={2} text1="Select a blue card." text2="It has alphabets." />
        {/* InstructCard component for match instructions */}
        <InstructCard card="group" number={3} text1="It's a match!" text2="Otherwise retry :(" text3="If they’re the same" />
      </CardContainer>
      <BackButton route='/intro3' />
      <BottomButton route="/activity" src="play" />
    </>
  );
};

const CardContainer = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 30px;
`;

export default Instructions;
