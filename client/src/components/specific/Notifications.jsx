import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  Typography
} from "@mui/material";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useErrors } from "../../hooks/Hook";
import { useAcceptFriendRequestMutation, useGetNotificationsQuery } from "../../redux/api/api";
import { setIsNotification } from "../../redux/reducers/misc";
import toast from "react-hot-toast";
const Notifications = () => {

  const dispatch = useDispatch();
  const {isNotification} = useSelector(state => state.misc);
 
  const [acceptRequest] = useAcceptFriendRequestMutation();

  const {isLoading,data,error,isError} = useGetNotificationsQuery();

  useErrors([{error,isError}]);

   
  const friendRequestHandler = async({_id,accept})=>{
        //  Add friend request handler...

        dispatch(setIsNotification(false));

        try {

          const res = await acceptRequest({requestId:_id,accept});

          if(res.data?.success){
            console.log("Use Socket");
            toast.success(res?.data?.message);
          } else{
              toast.error(res?.data?.error || "Something went wrong")
          }
                    
        } catch (error) {
          console.log(error);
        }
  }
  
  const closeHandler = ()=>{
    dispatch(setIsNotification(false));
  }

  return (
    <Dialog open = {isNotification} onClose={closeHandler} >
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>Notifications</DialogTitle>

        {data?.allRequests?.length > 0 ? (
          data?.allRequests?.map(({sender,_id})=> <NotificationsItem sender={sender} _id = {_id} handler={friendRequestHandler} key={_id}/>)
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
