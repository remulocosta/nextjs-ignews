/**
 * IMPORTS
 */
import React from 'react';
import {render} from '@testing-library/react';
import {screen} from '@testing-library/react';
import {SignInButton} from 'src/components/SignInButton';


/**
 * CODE
 */
describe('A SignInButton component', () =>
{
  it('renders correctly when user is authenticated', () =>
  {
    // render button component
    render(<SignInButton />);

    // get text by logout button title
    const logoutButton = screen.getByText('Remulo Costa');

    // logout button title rendered?
    expect(logoutButton).toBeInTheDocument();
  });

  it('renders correctly when user is not authenticated', () =>
  {
    // render button component
    render(<SignInButton />);

    // get text by sign In button title
    const loginButton = screen.queryByText('Sign in with Github');

    // sign In button title rendered?
    expect(loginButton).not.toBeInTheDocument();
  });
});
