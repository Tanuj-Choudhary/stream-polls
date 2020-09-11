import { useState, useEffect } from 'react';

import StreamPollsAPI from '../../api/StreamPollsAPI';

export const useAuth = () => {
  const [isSignedIn, setisSignedin] = useState(null);
  const [user, setUser] = useState({});

  useEffect(() => {
    async function checkAuth() {
      const token = localStorage.getItem('token');

      if (!token) {
        setisSignedin(false);
        return;
      }

      // Axios config
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const res = await StreamPollsAPI.get('/users/isSignedIn', config);

        setisSignedin(true);
        setUser(res.data.data.user);
      } catch (err) {
        setisSignedin(false);
      }
    }

    checkAuth();
  }, []);

  return [user, isSignedIn];
};

export default useAuth;
