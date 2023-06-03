import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';

const client = new ApolloClient({
    link: createHttpLink({ uri: 'https://rickandmortyapi.com/graphql' }),
    cache: new InMemoryCache(),
});

export default client;