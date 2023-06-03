/* eslint-disable react/prop-types */
import React from 'react';
import { EpWrapper, UlStyled } from './Styles/EpStyles';

const DisplayEpisode = ({ episode }) => (
  <div>
    {episode?.map((ep) => (
      <EpWrapper key={ep.id}>
        <p>Name: {ep.name}</p>
        <p>Episode: {ep.episode}</p>
        <p>Air Date: {ep.air_date}</p>
        <p>Characters seen in this episode:</p>
        <UlStyled>
          {ep.characters.map((chars) => (
            <li key={chars.id}>{chars.name}</li>
          ))}
        </UlStyled>
      </EpWrapper>
    ))}
  </div>
);

export default DisplayEpisode;
