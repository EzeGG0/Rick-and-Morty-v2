/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import StyledCharacters, { StyledStatus } from './Styles/StyledCharacters';
import Episode from './Episode';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

const DisplayChar = ({ data }) => {
  console.log(data?.status);
  return (
    <Wrapper>
      {data.map((char) => (
        <StyledCharacters key={char.id}>
          <p className="charName">{char.name}</p>
          <img src={char.image} alt={char.name} />
          <p>Gender: {char.gender}</p>
          <StyledStatus status={char?.status}>
            Status: <span>{char.status}</span>
          </StyledStatus>
          <p>Specie: {char.species}</p>
          <p>Location: {char.location.name}</p>
          <p>Dimension: {char.location.dimension}</p>
          <Episode episodes={char.episode} />
        </StyledCharacters>
      ))}
    </Wrapper>
  );
};

export default DisplayChar;
