/**
 * IMPORTS
 */
import React from 'react';
import {render} from '@testing-library/react';
import {screen} from '@testing-library/react';
import {SubscribeButton} from 'src/components/SubscribeButton';


/**
  * CODE
  */
describe('A SubscribeButton component', () =>
{
  it('renders correctly subscribe button', () =>
  {
    // render button component
    render(<SubscribeButton priceId='12345'/>);

    // get text by subscribe button title
    const logoutButton = screen.getByText('Subscribe now');

    // subscribe button title rendered?
    expect(logoutButton).toBeInTheDocument();
  });
});
