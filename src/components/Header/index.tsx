/**
 * IMPORTS
 */
import React from 'react';
import styles from 'src/components/Header/styles.module.scss';


/**
 * CODE
 */

/**
 * I render the header.
 *
 * :returns: header component
 */
function Header (): JSX.Element
{
  // return header component
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a className={styles.active} href="#">Home</a>
          <a href="#">Posts</a>
        </nav>
      </div>
    </header>
  );
}


/**
 * EXPORTS
 */
export {
  Header
};
