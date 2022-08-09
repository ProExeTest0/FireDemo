import {Connect, useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {ApiData} from '../src/action/Listaction';
import {makeApiRequest} from '../../global/Globalapi';
import {GET_API_DATA} from '../src/action/Type';

export const getAPIData = request => async dispatch => {
  console.log('request', request);

  await makeApiRequest({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts',
  })
    .then(response => {
      console.log('response ', response);
      if (request.onSuccsess) request.onSuccsess(response);
      dispatch({type: GET_API_DATA, payload: response});
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);
    });
};
