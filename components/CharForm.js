import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';
import useForm from '../lib/useForm';
import DisplayChar from './DisplayChar';
import StyledLink from './Styles/StyledLink';

const GET_CHARACTERS = gql`
  query GET_CHARACTERS($name: String!, $page: Int!) {
    characters(filter: { name: $name }, page: $page) {
      results {
        id
        name
        image
        gender
        type
        status
        species
        location {
          id
          name
          dimension
        }
        episode {
          episode
          name
        }
      }
    }
  }
`;

const CharForm = () => {
  const [page, setPage] = useState(1);
  const { handleChange, inputs } = useForm({ character: '' });
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { name: inputs.character, page },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data !== undefined) console.log(data);
  };

  const handleNextPage = () => setPage(page + 1);

  const handlePrevPage = () => {
    setPage(page - 1);
    if (page <= 1) {
      setPage(1);
    }
  };

  return (
    <>
      <StyledLink href="/characters/episodes">
        Character with Episodes
      </StyledLink>
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
        <button type="button" onClick={handlePrevPage}>
          Prev Page
        </button>
        <button type="button" onClick={handleNextPage}>
          Next Page
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <DisplayChar data={data?.characters.results} />}
    </>
  );
};

export default CharForm;
