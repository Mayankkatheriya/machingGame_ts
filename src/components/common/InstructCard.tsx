import React from "react";
import styled from "styled-components";

interface InstructCardProps {
  card: string;
  number: number;
  text1: string;
  text2: string;
  text3?: string;
}

const InstructCard: React.FC<InstructCardProps> = ({ card, number, text1, text2, text3 = "" }) => {
  return (
    <Container>
      <div className="card" style={{ width: number === 3 ? "100%" : undefined }}>
        <img src={`/${card}Card.png`} alt="" />
        {number === 1 && (
          <img className="instructAppleCard" src="/applePink.png" alt="" />
        )}
      </div>
      <img src={`/${number}.png`} alt="" className="number" />
      {text3 && <p>{text3}</p>}
      <h1 style={{ marginLeft: number === 3 ? "10px" : undefined }}>{text1}</h1>
      <p>{text2}</p>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 320px;
  border-radius: 70px;
  height: 400px;
  background-color: #fff;
  position: relative;
  padding: 20px 58px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .number {
    position: absolute;
    left: 0;
    top: 65%;
    width: 48px;
  }

  .card {
    width: 180px;
    position: relative;

    img {
      width: 100%;
    }

    .instructAppleCard {
      position: absolute;
      bottom: 15px;
      left: 50px;
    }
  }

  h1 {
    width: 100%;
    text-align: center;
    color: #11aec6;
    font-weight: 800;
    font-size: 2.2rem;
  }

  p {
    width: 100%;
    text-align: center;
    font-weight: 800;
    color: #a6c930;
    font-size: 1.5rem;
  }
`;

export default InstructCard;
