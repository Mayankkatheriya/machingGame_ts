import React from "react";
import Monkey from "./common/Monkey";
import BottomButton from "./common/BottomButton";
import Progress from "./common/Progress";
import BackButton from "./common/BackButton";

// Intro3 component for the third introduction screen

const Intro3: React.FC = () => {
  return (
    <>
      {/* Progress component to display the user's progress */}
      <Progress />
      {/* BackButton component for navigation to the previous screen */}
      <BackButton route='/intro2' />
      {/* Monkey component with a message asking for help */}
      <Monkey text="Can you help me get some? 🤔" />
      {/* BottomButton component for navigation to the next screen */}
      <BottomButton route="/instructions" src="yes" />
    </>
  );
};

export default Intro3;
