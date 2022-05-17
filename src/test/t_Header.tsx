/**
 * IMPORTS
 */
import React from 'react';
import {render} from '@testing-library/react';
import {screen} from '@testing-library/react';
import {Header} from 'src/components/Header';


/**
 * CODE
 */

// mocked router
jest.mock('next/router', () =>
{
  return {
    useRouter (): unknown
    {
      return {
        asPath: '/',
      };
    },
  };
});

// mocked useSession
jest.mock('next-auth/react', () =>
{
  return {
    useSession (): unknown
    {
      return {
        data: null,
        loading: 'loading',
      };
    },
  };
});

describe('A Header component', () =>
{
  it('should render the posts menu on header', () =>
  {
    // render header component
    render(<Header />);

    // get text by home menu
    const headerHome = screen.getByText('Home');

    // get text by posts menu
    const headerPosts = screen.getByText('Posts');

    // home menu rendered?
    expect(headerHome).toBeInTheDocument();

    // posts menu rendered?
    expect(headerPosts).toBeInTheDocument();
  });
});
