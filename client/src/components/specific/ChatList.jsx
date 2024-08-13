import { Stack } from "@mui/material";
import React from "react";
import ChatItem from "../shared/ChatItem";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handleDeleteChat,
}) => {
  return (
    <Stack width={w} direction={"column"}>
      {chats?.map((data, index) => {
        const { avatar, _id, name, groupChat, members } = data;

        const newMessageAlert = newMessagesAlert.find(
          ({ chatId }) => chatId === _id
        );

        console.log(onlineUsers);
        

        const isOnline = members?.some((member) => onlineUsers.includes(member));        
        return (
          <ChatItem
            index={index}
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            avatar={avatar}
            _id={_id}
            name={name}
            key={_id}
            sameSender={chatId === _id}
            handleDeleteChatOpen={handleDeleteChat}
          />
        );
      })}
    </Stack>
  );
};

export default ChatList;
