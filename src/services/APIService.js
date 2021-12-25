export const login = form => {
  return fetch(process.env.REACT_APP_API_SERVER_ROOT + '/login', {
      method: 'post',
      body: new FormData(form)
  });
};

export const checkLogin = token => {
  return fetch(process.env.REACT_APP_API_SERVER_ROOT + '/checkLogin', {
    method: 'get',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
};
