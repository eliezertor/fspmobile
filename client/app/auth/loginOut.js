import { useContext } from 'react';
import AuthContext from './context';
import authStorage from './authStorage';

export default userContext = () => {
  const { user, setUser } = useContext(AuthContext);

  const loggedInUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  console.log(user, 'This is context user********************');

  const logoutUser = () => {
    setUser(null);
  };

  return { loggedInUser, user, logoutUser };
};
