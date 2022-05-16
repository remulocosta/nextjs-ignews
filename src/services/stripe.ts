/**
 * IMPORTS
 */
import Stripe from 'stripe';


/**
 * CODE
 */

/**
 * I create an stripe instance.
 *
 * :returns: stripe API instance
 */
const stripe = new Stripe(
  process.env.STRIP_API_KEY || '',
  {
    apiVersion: '2020-08-27',
    appInfo: {
      name: 'ig.news',
      version: 'v0.1.0',
    },
  }
);


/**
 * EXPORTS
 */
export {
  stripe
};
