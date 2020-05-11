import {setUserSession} from "./common";

export default ({ name, password }) => {
  if (name === 'user' && password === 'password') {
    setUserSession(name + password);
    return true;
  } else return false;
};