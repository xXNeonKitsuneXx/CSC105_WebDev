import { Box } from '@mui/material'
import React, { useRef } from 'react'
import Confetti from 'react-confetti'

// YOU BROWSER IS FREEZING ?, THIS MIGHT BE A BUG FOR YOU TO FIX !
// IF YOU WANT TO SEE THE CHANGES THAT YOU MADE, YOU MIGHT NEED TO CLOSE THE TAB AND OPEN IT AGAIN.
// HINT: THE REACT  IS LOOPING FOREVER !

const Typography = () => {
  const ref = useRef()
  return (
    <Box display={"flex"} flexDirection="column" ref={ref} justifyContent={"center"} alignItems="center" width="100vw" height="100vh" overflow="hidden">
        <Confetti width={ref?.current?.offsetWidth} height={ref?.current?.offsetHeight} />
        <Typography component="h1" variant='h1'>Congratulation you've passed !</Typography>
    </Box>
  )
}

export default Typography