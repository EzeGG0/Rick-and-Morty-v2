import { gql, useLazyQuery } from '@apollo/client';
import React from 'react';
import Link from 'next/link';
import useForm from '../lib/useForm';
import Episode from './Episode';
import StyledLink from './Styles/StyledLink';

const GET_CHAR_EPISODES = gql`
  query GET_CHAR_EPISODES($name: String!) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        image
        origin {
          dimension
        }
        episode {
          id
          name
        }
      }
    }
  }
`;

const EpisodeForm = () => {
  const { inputs, handleChange } = useForm({ character: '' });
  const [getEpisodesPerCharacter, { error, loading, data }] =
    useLazyQuery(GET_CHAR_EPISODES);
  const handleSubmit = (e) => {
    e.preventDefault();
    getEpisodesPerCharacter({ variables: { name: inputs.character } });
  };
  return (
    <>
      <StyledLink href="/">Characters</StyledLink>
      <StyledLink href="/episodes">Episodes</StyledLink>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Character Name"
          name="character"
          value={inputs.character}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
      {loading && <p>Loading...</p>}
      {!data && <p>waiting for input</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <Episode epInfo={data.characters.results} />}
    </>
  );
};
export default EpisodeForm;
