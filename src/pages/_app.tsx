/**
 * IMPORTS
 */
import React from 'react';
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
  return <Component {...pageProps} />;
}


/**
 * EXPORTS
 */
export default MyApp;
