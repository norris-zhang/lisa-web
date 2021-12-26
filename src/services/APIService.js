const authHeader = token => {
  return {'Authorization': 'Bearer ' + token};
};

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

export const listClasses = () => {
  const token = localStorage.getItem('_token');
  if (!token) {
    return new Promise((resolve, reject) => {
      reject('No token found.');
    });
  }
  return fetch(process.env.REACT_APP_API_SERVER_ROOT + '/classes', {
    method: 'get',
    headers: {
      ...authHeader(token)
    }
  });
};
