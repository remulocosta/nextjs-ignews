/**
 * IMPORTS
 */
import {GetStaticProps} from 'next';
import Head from 'next/head';
import React from 'react';
import styles from 'src/styles/pages/home.module.scss';
import {SubscribeButton} from 'src/components/SubscribeButton';
import {stripe} from 'src/services/stripe';


/**
 * TYPES
 */
import {IHomeProps} from 'src/components/utils/home/index.d';


/**
 * CONSTANT AND DEFINITIONS
 */
const TIME_TO_REVALIDATE = 60 * 60 * 24; // 24 hours


/**
 * CODE
 */

/**
 * I render the home page.
 *
 * :returns: home page component
 */
function Home ({product}: IHomeProps): JSX.Element
{
  // return home component
  return (
    <>
      <Head>
        <title>Início | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId}/>
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}


/**
 * EXPORTS
 */
export const getStaticProps: GetStaticProps = async () =>
{
  // request price product by id
  const price = await stripe.prices.retrieve('price_1L04GkHVBtroUwEONxgSbnYt', {
    expand: ['product']
  });

  // get product
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount !== null ? (price.unit_amount / 100) : 0),
  };

  // return product
  return {
    props: {
      product,
    },
    revalidate: TIME_TO_REVALIDATE,
  };
};

export default Home;
