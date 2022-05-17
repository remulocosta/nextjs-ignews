/**
 * IMPORTS
 */
import Document from 'next/document';
import {Head} from 'next/document';
import {Html} from 'next/document';
import {Main} from 'next/document';
import {NextScript} from 'next/document';
import React from 'react';


/**
  * EXPORTS
  */
export default class MyDocument extends Document
{
  render (): JSX.Element
  {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />

          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
