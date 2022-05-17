/**
 * IMPORTS
 */
import {NextApiRequest} from 'next';
import {NextApiResponse} from 'next';


/**
 * EXPORTS
 */
export default (request: NextApiRequest, response: NextApiResponse): void =>
{
  const users = [
    {id: 1, name: 'remulo'},
    {id: 2, name: 'suzana'},
    {id: 3, name: 'romena'},
    {id: 4, name: 'alice'},
    {id: 5, name: 'elena'},
  ];

  return response.json(users);
};
