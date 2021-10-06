import { Dispatch } from 'redux';
import Swal from 'sweetalert2';
import api from '../../../api/requests';

/**
 * This function helps with getting quotes categories array from the backend.
 * @returns promise
 */
export const getQuotesCategories =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const data = await api.get('/jokes/categories');
      await dispatch({ type: 'GET_CATEGORIES', payload: data });
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Cant get categories list from server. Try to reload page.',
      });
      dispatch({ type: 'ERROR_ACTION_TYPE' });
    }
  };
