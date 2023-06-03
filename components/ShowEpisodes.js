import { gql, useLazyQuery } from '@apollo/client';
import React from 'react';
import useForm from '../lib/useForm';
import DisplayEpisode from './DisplayEpisode';
import StyledLink from './Styles/StyledLink';

const GET_EPISODES = gql`
  query GET_EPISODES($episode: String!) {
    episodes(filter: { episode: $episode }) {
      results {
        id
        name
        episode
        air_date
        characters {
          id
          name
        }
      }
    }
  }
`;

const ShowEpisodes = () => {
  const { inputs, handleChange } = useForm({
    season: '',
    episode: '',
  });

  const [getEpisodes, { error, loading, data }] = useLazyQuery(GET_EPISODES);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputEpisode = inputs.season.concat(inputs.episode);
    getEpisodes({ variables: { episode: inputEpisode } });
    console.log({ data, error, loading });
  };
  return (
    <>
      <StyledLink href="/">Characters</StyledLink>
      <StyledLink href="characters/episodes">
        Characters With episodes
      </StyledLink>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Season"
            name="season"
            value={inputs.season.padStart(2, 'S0')}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Episode"
            name="episode"
            value={inputs.episode.padStart(2, 'E0')}
            onChange={handleChange}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <DisplayEpisode episode={data?.episodes.results} />}
    </>
  );
};

export default ShowEpisodes;
