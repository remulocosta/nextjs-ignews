/**
 * IMPORTS
 */
import React from 'react';
import {FaGithub} from 'react-icons/fa';
import {FiX} from 'react-icons/fi';
import styles from 'src/components/SignInButton/styles.module.scss';
import {signIn} from 'next-auth/react';
import {signOut} from 'next-auth/react';
import {useSession} from 'next-auth/react';


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
  // get user session
  const {data: session} = useSession();

  // user session exists: return logout button or return sign in button
  return session !== null ? (

    // render logout button
    <button
      className={styles.signInButton}
      type='button'
      onClick={(): Promise<void> => signOut()}
    >
      <FaGithub color="#04d361" />
      {session?.user?.name || 'Sem usuário'}
      <FiX color='#737380' className={styles.closeIcon} />
    </button>
  ) : (

    // render sign in button
    <button
      className={styles.signInButton}
      type='button'
      onClick={(): Promise<void> => signIn('github')}
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
