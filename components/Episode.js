/* eslint-disable react/prop-types */
import React from 'react';
import { Wrapper } from './DisplayChar';

const Episode = ({ epInfo }) => {
  console.log(epInfo);
  return (
    <>
      <p>Characters:</p>
      <Wrapper>
        {epInfo?.map((ep) => (
          <div key={ep.id}>
            <p>{ep.name}</p>
            <p>Dimension: {ep.origin.dimension}</p>
            <img src={ep.image} alt={ep.name} />
            <ul>
              {ep.episode.map((episodes) => (
                <li key={episodes.id}>{episodes.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </Wrapper>
    </>
  );
};

export default Episode;
