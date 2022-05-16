/**
 * IMPORTS
 */
import Head from 'next/head';
import React from 'react';


/**
 * CODE
 */

/**
 * I render the home page.
 *
 * :returns: home page
 */
function Home (): JSX.Element
{
  // return home component
  return (
    <>
      <Head>
        <title>Início | ig.news</title>
      </Head>
      <main>ig.News</main>
    </>
  );
}


/**
 * EXPORTS
 */
export default Home;
