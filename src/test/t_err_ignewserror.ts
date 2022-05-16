/**
 * IMPORTS
 */
import {IgnewsError} from 'src/err/ignewserror';


/**
 * CODE
 */
describe('A ignews exception', (): void =>
{
  it('should be an error', (): void =>
  {
    // create instance to be tested
    const instance = new IgnewsError('message');

    // is error?
    expect(instance).toBeInstanceOf(Error);
  });


  it('should set correct message', (): void =>
  {
    // set error message
    const message = 'error message';

    // create instance to be tested
    const instance = new IgnewsError(message);

    // set?
    expect(instance.message).toBe(message);
  });


  it('should set correct name', (): void =>
  {
    // create instance to be tested
    const instance = new IgnewsError('message');

    // set?
    expect(instance.name).toBe('IgnewsError');
  });
});
