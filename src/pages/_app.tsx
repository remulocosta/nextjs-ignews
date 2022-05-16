/**
 * IMPORTS
 */
import React from 'react';
import {Header} from 'src/components/Header';
import 'src/styles/global.scss';


/**
 * TYPES
 */
import type {AppProps} from 'next/app';


/**
 * CODE
 */

/**
 * I render the app.
 *
 * :returns: app component
 */
function MyApp ({Component, pageProps}: AppProps): JSX.Element
{
  // return app component
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}


/**
 * EXPORTS
 */
export default MyApp;
