const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;

const authHeader = token => {
  return {'Authorization': 'Bearer ' + token};
};

export const login = form => {
  const formData = new FormData(form);
  // const bodyObj = {};
  // formData.forEach((value, key) => {
  //   bodyObj[key] = value;
  // });
  return fetch(process.env.REACT_APP_API_SERVER_ROOT + '/login', {
      method: 'POST',
      // body: JSON.stringify(bodyObj)
      body: formData
  });
};

export const checkLogin = (jsonHandler, errorHandler) => {
  const token = localStorage.getItem('_token');
  fetch(process.env.REACT_APP_API_SERVER_ROOT + '/checkLogin', {
    method: 'get',
    headers: {
      ...authHeader(token)
    }
  })
  .then(response => {
    if (response.ok) {
      jsonHandler({});
    } else {
      throw new Error('response status is ' + response.status);
    }
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

export const listStudents = (classId, jsonHandler, errorHandler) => {
  const token = localStorage.getItem('_token');
  if (!token) {
    errorHandler('No token found');
    // return new Promise((resolve, reject) => {
    //   reject('No token found.');
    // });
  }
  fetch(process.env.REACT_APP_API_SERVER_ROOT + '/students/' + classId, {
    method: 'get',
    headers: {
      ...authHeader(token)
    }
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('response status is ' + response.status);
    }
  })
  .then(jsonHandler)
  .catch(errorHandler);
};

export const hasTokenWithinPeriod = () => {
  const loginToken = localStorage.getItem('_token');
  const lastLogin = localStorage.getItem('lastLogin');
  if (!loginToken) {
    return false;
  }
  if (!lastLogin) {
    return false;
  }
  let milli = parseInt(lastLogin);
  if (isNaN(milli)) {
    return false;
  }
  let now = new Date();
  let lastLoginDate = new Date(milli);
  if (now - lastLoginDate > THIRTY_DAYS) {
    return false;
  }
  return true;
};
