/**
 * IMPORTS
 */
import React from 'react';
import {render} from '@testing-library/react';
import {screen} from '@testing-library/react';
import {useSession} from 'next-auth/react';
import {SignInButton} from 'src/components/SignInButton';


/**
 * CODE
 */

// mocked useSession
jest.mock('next-auth/react');

describe('A SignInButton component', () =>
{
  it('renders correctly when user is authenticated', () =>
  {
    // get mocked session
    const useSessionMocked = jest.mocked(useSession);

    // define mocked session values
    useSessionMocked.mockReturnValueOnce({
      data: {
        user: {name: 'John Doe', email: 'john.doe@example.com'},
        expires: 'fake-expires',
      },
      status: 'authenticated',
    });

    // render button component
    render(<SignInButton />);

    // get text by logout button title
    const logoutButton = screen.getByText('John Doe');

    // logout button title rendered?
    expect(logoutButton).toBeInTheDocument();
  });

  it('renders correctly when user is not authenticated', () =>
  {
    // get mocked session
    const useSessionMocked = jest.mocked(useSession);

    // define mocked session values
    useSessionMocked.mockReturnValueOnce({data: null, status: 'loading'});

    // render button component
    render(<SignInButton />);

    // get text by sign In button title
    const loginButton = screen.queryByText('Sign in with Github');

    // sign In button title rendered?
    expect(loginButton).toBeInTheDocument();
  });
});
