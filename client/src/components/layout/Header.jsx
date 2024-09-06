import React, { lazy, startTransition, Suspense, useState } from "react";
import {
  AppBar,
  Backdrop,
  Badge,
  Box,
  Icon,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { orange } from "../../constants/color";
import {
  Add as AddIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Search,
  Search as SearchIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../constants/config";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { userNotExists } from "../../redux/reducers/auth";
import { setIsMobile, setIsSearch,setIsNotification,setIsNewGroup } from "../../redux/reducers/misc";
import { resetNotificationCount } from "../../redux/reducers/chat";
// import SearchDialog from '../specific/Search';

const SearchDialog = lazy(() => import("../specific/Search"));
const NotificationsDialog = lazy(() => import("../specific/Notifications"));
const NewGroupDiaglog = lazy(() => import("../specific/NewGroup"));
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {isSearch,isNotification, isNewGroup} = useSelector((state) => state.misc)
  const {notificationCount} = useSelector((state) => state.chat)

 
  

  

  const handlemobile = () => {
     dispatch(setIsMobile(true));
  };

  const openSearch = () => {
    dispatch(setIsSearch(true));
  };

  const openNewGroup = () => {
    dispatch(setIsNewGroup(true));
  };

  const openNotification = () => {
    dispatch(setIsNotification(true));
    dispatch(resetNotificationCount());
  };
  // const navigateToGroup = ()=> navigate("/groups");

  const navigateToGroup = () => {
    // Use startTransition to navigate
    startTransition(() => {
      navigate("/groups");
    });
  };

  const logoutHandler = async () => {
    try {
      const { data } = await axios.get(`${server}/api/v1/user/logout`, {
        withCredentials: true,
      });
      
      toast.success(data.message);
      dispatch(userNotExists());

    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong")
    }
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: orange,
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              KP-Chat
            </Typography>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton color="inherit" onClick={handlemobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconBtn
                title={"Search"}
                icon={<SearchIcon />}
                onclick={openSearch}
              />
              <IconBtn
                title={"New Group"}
                icon={<AddIcon />}
                onclick={openNewGroup}
              />
              <IconBtn
                title={"Manage Group"}
                icon={<GroupIcon />}
                onclick={navigateToGroup}
              />
              <IconBtn
                title={"Notifactions"}
                icon={<NotificationsIcon />}
                onclick={openNotification}
                value={notificationCount}
              />
              <IconBtn
                title={"Logout"}
                icon={<LogoutIcon />}
                onclick={logoutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialog />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <NotificationsDialog />
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupDiaglog />
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ title, icon, onclick,value }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onclick}>
        {
          value ? <Badge badgeContent={value} color="error">{icon}</Badge> : icon
        }
      </IconButton>
    </Tooltip>
  );
};

export default Header;
