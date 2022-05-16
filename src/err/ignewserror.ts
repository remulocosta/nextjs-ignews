/**
 * CODE
 */

/**
 * I am a generic ignews error.
 */
class IgnewsError extends Error
{
  /**
   * I initialize myself.
   *
   * :param message: error message
   *
   * :returns: nothing
   */
  constructor (message: string)
  {
    // call the superclass constructor
    super(message);

    // set exception name
    this.name = this.constructor.name;
  }
}


/**
 * EXPORTS
 */
export {
  IgnewsError
};
