import { Button, Card, TextField, Typography } from '@mui/material';
import React, { useCallback, useContext, useState } from 'react';
import Cookies from 'js-cookie';
import Axios from '../../../AxiosInstance';
import { AxiosError } from 'axios';
import GlobalContext from '../../../Context/GlobalContext';

const CommentCard = ({ comment = { id: -1, msg: '' }, setComments = () => {}, deleteComment }) => {
  const [isConfirm, setIsConfirm] = useState(false);
  const [functionMode, setFunctionMode] = useState('update');
  const [msg, setMsg] = useState(comment.msg);
  const { setStatus } = useContext(GlobalContext);

  const submit = useCallback(async () => {
    if (functionMode === 'update') {
      try {
        const userToken = Cookies.get('UserToken');
        const response = await Axios.patch(
          '/comment',
          {
            text: msg,
            commentId: comment.id,
          },
          {
            headers: { Authorization: `Bearer ${userToken}` },
          }
        );

        if (response.data.success) {
          comment.msg = response.data.data.text;
          setStatus({
            severity: 'success',
            msg: 'Comment updated successfully',
          });
          cancelAction();
        } else {
          setStatus({
            severity: 'error',
            msg: 'Failed to update comment',
          });
        }
      } catch (error) {
        if (error instanceof AxiosError && error.response) {
          const errorMessage = error.response.data.error || error.message;
          setStatus({
            severity: 'error',
            msg: errorMessage,
          });
        } else {
          setStatus({
            severity: 'error',
            msg: error.message,
          });
        }
      }
    } else if (functionMode === 'delete') {
      deleteComment(comment.id, cancelAction)
    }
  }, [functionMode, msg]);

  


  const changeMode = (mode) => {
    setFunctionMode(mode);
    setIsConfirm(true);
  };

  const cancelAction = () => {
    setFunctionMode('');
    setIsConfirm(false);
  };

  return (
    <Card sx={{ p: '1rem', m: '0.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
      {!(isConfirm && functionMode == 'update') ? (
        <Typography sx={{ flex: 1 }}>{comment.msg}</Typography>
      ) : (
        <TextField sx={{ flex: 1 }} value={msg} onChange={(e) => setMsg(e.target.value)} />
      )}
      {!isConfirm ? (
        <Button onClick={() => changeMode('update')} variant="outlined" color="info">
          update
        </Button>
      ) : (
        <Button onClick={submit} variant="outlined" color="success">
          confirm
        </Button>
      )}
      {!isConfirm ? (
        <Button onClick={() => changeMode('delete')} variant="outlined" color="error">
          delete
        </Button>
      ) : (
        <Button onClick={cancelAction} variant="outlined" color="error">
          cancel
        </Button>
      )}
    </Card>
  );
};

export default CommentCard;