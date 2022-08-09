import axios from 'axios';
import {GET_API_DATA} from '../src/action/Type';

export const makeApiRequest = ({method, url, data, headers, params, baseURL}) =>
  new Promise(async (resolve, reject) => {
    const options = {
      method,
      url,
      data,
      headers,
      params,
      baseURL,
    };
    axios(options)
      .then(response => {
        if (response.status === 200) {
          resolve(response?.data);
        } else {
          reject(response);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
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
