import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// BackButton component for navigating to the specified route

interface BackButtonProps {
  route: string;
}

const BackButton: React.FC<BackButtonProps> = ({ route }) => {
  return (
    <Container>
      {/* Link to navigate back to the specified route */}
      <Link to={`${route}`}>
        <img src="/back.png" alt="" />
      </Link>
    </Container>
  );
};

// Styled component for the BackButton container
const Container = styled.div`
  position: absolute;
  top: 20px;
  left: 10px;

  img {
    width: 100%;
    max-width: 100px;
  }
`;

export default BackButton;
