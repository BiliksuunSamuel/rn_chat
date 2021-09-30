import {registerInfoType} from '../types/types';

export const validatePhonePassword = (user: registerInfoType) => {
  if (user.phone.length != 10 || isNaN(+user.phone)) {
    return {
      ...user,
      valid: false,
      error: 'invalid phone number,10 digits required',
    };
  }
  if (user.password.length < 4) {
    return {
      ...user,
      valid: false,
      error: 'password required,minimum of 4 characters',
    };
  }
  return {...user, valid: true, error: null};
};

export const validateNameImage = (user: registerInfoType) => {
  if (!isNaN(+user.username) || user.username.length <= 0) {
    return {...user, valid: false, error: 'invalid username,username required'};
  }
  return {...user, valid: true, error: null};
};
