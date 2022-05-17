/**
 * IMPORTS
 */
import React from 'react';
import {FaGithub} from 'react-icons/fa';
import {FiX} from 'react-icons/fi';
import styles from 'src/components/SignInButton/styles.module.scss';


/**
 * CODE
 */

/**
 * I render the sign in button.
 *
 * :returns: sign in button component
 */
function SignInButton (): JSX.Element
{
  // get user is logged in
  const isUserLoggedIn = true;

  // user logged: return logout button or return sign in button
  return isUserLoggedIn === true ? (

    // render logout button
    <button
      className={styles.signInButton}
      type='button'
    >
      <FaGithub color="#04d361" />
      Remulo Costa
      <FiX color='#737380' className={styles.closeIcon} />
    </button>
  ) : (

    // render sign in button
    <button
      className={styles.signInButton}
      type='button'
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}


/**
 * EXPORTS
 */
export {
  SignInButton
};
