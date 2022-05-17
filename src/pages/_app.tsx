/**
 * IMPORTS
 */
import {SessionProvider as NextAuthProvider} from 'next-auth/react';
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
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}


/**
 * EXPORTS
 */
export default MyApp;
