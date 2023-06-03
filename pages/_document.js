/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-danger */
import React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { extractCritical } from '@emotion/server';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;
    const cache = createCache({ key: 'css', prepend: true });

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          (
            <CacheProvider value={cache}>
              <App {...props} />
            </CacheProvider>
          ),
      });

    const initialProps = await Document.getInitialProps(ctx);
    const { css, ids } = extractCritical(initialProps.html);
    const emotionStyleTags = (
      <style
        data-emotion-css={ids.join(' ')}
        dangerouslySetInnerHTML={{ __html: css }}
      />
    );

    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        emotionStyleTags,
      ],
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
