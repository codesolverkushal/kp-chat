import React, { useCallback, useEffect, useRef, useState } from 'react';
import AppLayout from '../components/layout/AppLayout';
import { IconButton, Skeleton, Stack } from '@mui/material';
import { graycolor } from '../constants/color';
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';
import { InputBox } from '../components/styles/StyledComponents';
import { orange } from '../constants/color';
import FileMenu from '../components/dialog/FileMenu';
import { sampleMessage } from '../constants/sampleData';
import MessageComponent from '../components/shared/MessageComponent';
import { getSocket } from '../Socket';
import {NEW_MESSAGE} from "../constants/events";
import { useChatDetailsQuery } from '../redux/api/api';
const user = {
  _id:"sdfsdfsdf",
  name:"Kp singh"
}
const Chat = ({chatId}) => {
  const containerRef = useRef(null);

  const socket = getSocket();

  const chatDetails = useChatDetailsQuery({chatId,skip:!chatId})

  const [message,setMessage] = useState("");

  const members = chatDetails ?. data ?. chat ?. members;
  

  const submitHandler = (e)=>{
    e.preventDefault();

    if(!message.trim()) return ;


    // Emitting message to the server...
    socket.emit(NEW_MESSAGE,{chatId,members,message});
    setMessage("");
  }


  const newMessagesHandler = useCallback((data)=>{
    console.log(data);
  },[])
  
  useEffect(()=>{
     socket.on(NEW_MESSAGE,newMessagesHandler);

     return ()=>{
      socket.off(NEW_MESSAGE,newMessagesHandler)
     }
  },[])

  return chatDetails.isLoading ? ( <Skeleton/> 

  ) : (
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
      >

        {
          sampleMessage.map((i)=>(
            <MessageComponent key={i._id} message={i} user={user}/>
          ))
        }

      </Stack>

      <form style={{ height: '10%' }} onSubmit={submitHandler}>
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

          <InputBox placeholder='Type your thought...' value={message} onChange={(e)=>setMessage(e.target.value)}/>

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
