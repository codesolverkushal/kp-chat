import React, { useRef, useState } from 'react';
import AppLayout from '../components/layout/AppLayout';
import { IconButton, Stack } from '@mui/material';
import { graycolor } from '../constants/color';
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';
import { InputBox } from '../components/styles/StyledComponents';
import { orange } from '../constants/color';
import FileMenu from '../components/dialog/FileMenu';

const Chat = () => {
  const containerRef = useRef(null);
  
  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={graycolor}
        height={"90%"}
        sx={{
          overflowX: 'hidden',
          overflowY: 'auto',
        }}
      ></Stack>

      <form style={{ height: '10%' }}>
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
            sx={{
              position: 'absolute',
              left: '1.5rem',
              rotate: '35deg',
            }}
          >
            <AttachFileIcon />
          </IconButton>

          <InputBox placeholder='Type your thought...' />

          <IconButton
            type='submit'
            sx={{
              backgroundColor: orange,
              color: 'white',
              marginLeft: '1rem',
              padding: '0.5rem',
              '&:hover': {
                rotate: '-90deg',
                backgroundColor: 'error.dark',
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu />
    </>
  );
};

export default AppLayout()(Chat); // Corrected HOC usage
