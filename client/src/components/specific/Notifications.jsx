import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  Stack,
  Avatar,
  IconButton,
  Typography,
  Button,
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
  const {name,avatar} = sender;
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
         {`${name} sent you a friend request.`}        
        </Typography>
         
         <Stack
          direction={{
            xs:"column",
            sm:"row",
          }}
          >
           <Button onClick={()=>handler({_id,accept:true})}>Accept</Button>
           <Button color="error" onClick={()=>handler({_id,accept:false})}>Reject</Button>
         </Stack>
                 
      </Stack>
    </ListItem>
  )
});

export default Notifications;
