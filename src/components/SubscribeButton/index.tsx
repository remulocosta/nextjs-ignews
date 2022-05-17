/**
 * IMPORTS
 */
import React from 'react';
import styles from 'src/components/SubscribeButton/styles.module.scss';


/**
 * TYPES
 */
import {ISubscribeButtonProps} from 'src/components/SubscribeButton/index.d';


/**
 * CODE
 */

/**
 * I render the subscribe button.
 *
 * :params priceId: id of the product to be used for subscription
 *
 * :returns: subscribe button component
 */
function SubscribeButton ({priceId}: ISubscribeButtonProps): JSX.Element
{
  // TODO: When implementing the subscription, remove this one.
  // eslint-disable-next-line no-console
  console.log('selected product:', priceId);

  // return button component
  return (
    <button
      className={styles.subscribeButton}
      type='button'
    >
      Subscribe now
    </button>
  );
}


/**
 * EXPORTS
 */
export {
  SubscribeButton
};
