import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  Stack,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add'; // Import AddIcon from Material-UI icons
import React, { memo } from "react";
import { sampleNotifications } from "../../constants/sampleData";


const Notifications = () => {
   
  const friendRequestHandler = ({_id,accept})=>{

  }


  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>Notifications</DialogTitle>

        {sampleNotifications.length > 0 ? (
          sampleNotifications.map(({sender,_id})=> <NotificationsItem sender={sender} _id = {_id} handler={friendRequestHandler} key={_id}/>)
        ) : (
          <Typography textAlign={"center"}>0 Notification</Typography>
        )}
      </Stack>
    </Dialog>
  );
};


const NotificationsItem = memo(({sender,_id,handler})=>{
  console.log(sender);
  return (
     <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar src={sender.avatar} />
        <Typography
          variant="body1"
          sx={{
            flexGlow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width:"100%"
          }}
        >
         {sender.name}
        </Typography>

        <IconButton
          size="small"
          sx={{
            bgcolor: "primary.main",
            color: "white",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
          // onClick={() => handler(_id)}
          // disabled={handlerIsLoading}
        >
          <AddIcon />
        </IconButton>
      </Stack>
    </ListItem>
  )
});

export default Notifications;
