import React, { useContext, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import CustomButton from './CustomButton';
import Axios from '../AxiosInstance';
import Cookies from 'js-cookie';
import GlobalContext from '../context/GlobalContext';

const Navbar = ({ handleOpen = () => {} }) => {
  const { user, setUser } = useContext(GlobalContext);

  useEffect(() => {
    const fetchUser = async () => {
      // 1. Check if cookie is set
      const userToken = Cookies.get('UserToken');
      if (userToken == null || userToken === 'undefined') return;

      // 2. Send a request to server
      try {
        const response = await Axios.get('/me', {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });

        // 3. If successful, set user information
        setUser({
          username: response.data.data.username,
          email: response.data.data.email,
        });
      } catch (error) {
        console.log('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  const logout = () => {
    setUser(null);
    Cookies.remove('UserToken');
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="flex-end"
      spacing={2}
      sx={{
        position: 'sticky',
        zIndex: 10,
        marginBottom: '8px',
        padding: '16px',
      }}
    >
      {user ? (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Typography>{user.username}</Typography>
          <CustomButton text="Log out" handle={logout} />
        </Box>
      ) : (
        <CustomButton text="Log in" handle={handleOpen} />
      )}
    </Stack>
  );
};

export default Navbar;