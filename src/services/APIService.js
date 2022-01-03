const authHeader = token => {
  return {'Authorization': 'Bearer ' + token};
};

export const login = form => {
  const formData = new FormData(form);
  const bodyObj = {};
  formData.forEach((value, key) => {
    bodyObj[key] = value;
  });
  return fetch(process.env.REACT_APP_API_SERVER_ROOT + '/login', {
      method: 'POST',
      body: JSON.stringify(bodyObj)
  });
};

export const checkLogin = (token, jsonHandler, errorHandler) => {
  fetch(process.env.REACT_APP_API_SERVER_ROOT + '/checkLogin', {
    method: 'get',
    headers: {
      'sessionid': token
    }
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('response status is ' + response.status);
    }
  })
  .then(json => {
    jsonHandler(json);
  })
  .catch(error => {
    errorHandler(error);
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
