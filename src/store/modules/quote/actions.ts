import { Dispatch } from 'redux';
import Swal from 'sweetalert2';
import api from '../../../api/requests';

/**
 * This function helps with getting Chuck Norris quote from the backend.
 * @returns promise
 */
export const getQuote =
  (category: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const data =
        category !== 'random' ? await api.get(`/jokes/random?category=${category}`) : await api.get('/jokes/random');
      await dispatch({ type: 'GET_QUOTE', payload: data });
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Cant get Chuck Norris quote from server. Try to reload page.',
      });

      dispatch({ type: 'ERROR_ACTION_TYPE' });
    }
  };
