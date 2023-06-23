import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS } from './../actionTypes';
import { push } from 'redux-first-history';
const actionCreators = {
  login(user) {
    return function (dispatch, getState, request) {
      return request.post('/api/login', user).then(res => {
        const { success, data, error } = res.data;
        if (success) {
          dispatch({ type: LOGIN_SUCCESS, payload: data });
          dispatch(push('/profile'));
        } else {
          dispatch({ type: LOGIN_FAIL, payload: error });
        }
      });
    }
  },
  logout() {
    return function (dispatch, getState, request) {
      return request.get('/api/logout').then(res => {
        const { success } = res.data;
        if (success) {
          dispatch({ type: LOGOUT_SUCCESS });
          dispatch(push('/login'));
        }
      });
    }
  },
  validate() {
    return function (dispatch, getState, request) {
      return request.get('/api/validate').then(res => {
        const { success, data } = res.data;
        if (success) {
          dispatch({ type: LOGIN_SUCCESS, payload: data });
        }
      });
    }
  }
}

export default actionCreators;