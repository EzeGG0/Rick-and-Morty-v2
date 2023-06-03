import styled from 'styled-components';

const StyledCharacters = styled.div`
  display: flex;
  flex-flow: column wrap;
  border: 1px solid purple;
  margin: 1rem;
  width: 30rem;
  align-content: center;
  img {
    width: 400px;
    height: auto;
  }
  .charName {
    font-size: 2rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    font-weight: bold;
  }
`;

export const StyledStatus = styled.p`
  /* font-size: 100rem; */
  span {
    color: ${(props) =>
      // eslint-disable-next-line eqeqeq, no-nested-ternary
      props.status == 'Alive'
        ? 'green'
        : props.status === 'Dead'
        ? 'red'
        : 'violet'};
  }
`;

export default StyledCharacters;
