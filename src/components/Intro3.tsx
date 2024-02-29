import React from "react";
import Monkey from "./common/Monkey";
import BottomButton from "./common/BottomButton";
import Progress from "./common/Progress";
import BackButton from "./common/BackButton";

// Intro3 component for the third introduction screen

const Intro3: React.FC = () => {
  return (
    <>
      <Progress />
      <BackButton route='/intro2' />
      <Monkey text="Can you help me get some? 🤔" />
      <BottomButton route="/instructions" src="yes" />
    </>
  );
};

export default Intro3;
