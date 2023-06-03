/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import client from '../lib/withApollo';
import 'normalize.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  </ThemeProvider>
);

export default MyApp;
