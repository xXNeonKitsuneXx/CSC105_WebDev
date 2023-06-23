import { Box, Button, Card, Modal, TextField } from '@mui/material';
import React, { useEffect, useState, useContext } from 'react';
import { useKeyDown } from '../../../hooks/useKeyDown';
import CommentCard from './components/CommentCard';
import Cookies from 'js-cookie';
import Axios from '../../AxiosInstance';
import { AxiosError } from 'axios';
import GlobalContext from '../../Context/GlobalContext';

const CommentModal = ({ open = false, handleClose = () => {} }) => {
  const [textField, setTextField] = useState('');
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");
  const { setStatus } = useContext(GlobalContext);

  useKeyDown(() => {
    handleAddComment();
  }, ['Enter']);
  
  useEffect(() => {
    const userToken = Cookies.get('UserToken');
    Axios.get('/comment', { headers: { Authorization: `Bearer ${userToken}` } }).then((res) => {
      const comments = res.data.data.map((comment) => ({
        id: comment.id,
        msg: comment.text,
      }));
      setComments(comments);
    });
  }, []);

  const handleAddComment = async () => {
    if(!validateForm()) return;
    try{
      const userToken = Cookies.get('UserToken');
      const response = await Axios.post('/comment', {text:textField},{
        headers: { Authorization: `Bearer ${userToken}` },
      });
      if(response.data.success){
        setStatus({severity: 'success', msg: 'Create comment successfully'});
        setComments([...comments, { id: response.data.data.id, msg: textField }]);
        // resetAndClose();
      }
    }catch(error){
      if(error instanceof AxiosError && error.response){
        setStatus({severity: 'error', msg: error.response.data.message});
      }else{
        setStatus({severity: 'error', msg: error.message});
      }
    }
  };

  const deleteComment = async (id, cancelAction) => {
    try {
      const userToken = Cookies.get('UserToken');
      const response = await Axios.delete('/comment', {
        headers: { Authorization: `Bearer ${userToken}` },
        data: { commentId: id },
      });
      if (response.data.success) {
        setComments(comments.filter((comment) => {
          return comment.id != id
        }))
        setStatus({
          severity: 'success',
          msg: 'Comment deleted successfully',
        });
      } else {
        setStatus({
          severity: 'error',
          msg: 'Failed to delete comment',
        });
      }
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        setStatus({
          severity: 'error',
          msg: error.response.data.error || JSON.stringify(error.response.data),
        });
      } else {
        setStatus({
          severity: 'error',
          msg: error.message,
        });
      }
    }
  }

  const validateForm = () => {
    if (textField == ""){
      setError("Input required")
      return false;
    }
    setError("");
    setTextField("");
    return true;
  };

  const resetAndClose = () => {
    setTimeout(() => {
      setError("");
    }, 500);
    handleClose();
  };
  

  return (
    <Modal open={open} onClose={handleClose}>
      <Card
        sx={{
          width: { xs: '60vw', lg: '40vw' },
          maxWidth: '600px',
          maxHeight: '400px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '16px',
          backgroundColor: '#ffffffCC',
          p: '2rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <TextField
            value={textField}
            onChange={(e) => setTextField(e.target.value)}
            fullWidth
            placeholder="Type your comment"
            variant="standard"
            error={error !== ""}
            helperText={error}
          />
          <Button onClick={handleAddComment}>Submit</Button>
        </Box>
        <Box
          sx={{
            overflowY: 'scroll',
            maxHeight: 'calc(400px - 2rem)',
            '&::-webkit-scrollbar': {
              width: '.5rem', 
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#999999',
              borderRadius: '10px',
            },
          }}
        >
          {comments.map((comment) => (  
            <CommentCard comment={comment} key={comment.id} deleteComment={deleteComment} />
          ))}
        </Box>
      </Card>
    </Modal>
  );
};

export default CommentModal;