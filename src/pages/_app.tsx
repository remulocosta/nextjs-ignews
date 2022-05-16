/**
 * IMPORTS
 */
import React from 'react';


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
  return <Component {...pageProps} />;
}


/**
 * EXPORTS
 */
export default MyApp;
