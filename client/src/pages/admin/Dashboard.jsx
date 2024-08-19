import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { Stack, Container, Paper, Typography, Box } from "@mui/material";
import {
  AdminPanelSettings as AdminPanelSettingsIcon,
  Group as GroupIcon,
  Message as MessageIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon
} from "@mui/icons-material";
import moment from "moment";
import {
  SearchField,
  CurveButton,
} from "../../components/styles/StyledComponents";

const Dashboard = () => {
  const Appbar = (
    <Paper
      elevation={3}
      sx={{ padding: "2rem", margin: "2rem 0", borderRadius: "1rem" }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        <AdminPanelSettingsIcon
          sx={{
            fontSize: "3rem",
          }}
        />
        <SearchField placeholder="Search..." />
        <CurveButton>Search</CurveButton>
        <Box flexGrow={1} />
        <Typography
          display={{
            xs: "none",
            lg: "block",
          }}
          color={"rgba(0,0,0,0.7)"}
          textAlign={"center"}
        >
          {moment().format("dddd, MMMM Do YYYY")}
        </Typography>

        <NotificationsIcon />
      </Stack>
    </Paper>
  );

  const Widgets =(
    <Stack direction={{
        xs:"column",
        sm:"row"
    }}
      spacing={"2rem"}
      justifyContent={"space-between"}
      alignItems={"center"}
      margin={"2rem 0"}
    >
        <Widget title={"Users"} value={34} Icon={<PersonIcon/>}/>
        <Widget title={"Chats"} value={3} Icon={<GroupIcon/>}/>
        <Widget title={"Messages"} value={450} Icon={<MessageIcon/>}/>
    </Stack>
  )
  return (
    <AdminLayout>
      <Container component={"main"}>
        {Appbar}

        <Stack direction={"row"} spacing={"2rem"} flexWrap={"wrap"}>
          <Paper
            elevation={6}
            sx={{
              padding: "2rem 3rem",
              borderRadius: "1rem",
              width: "100%",
              maxWidth: "45rem",
              backgroundColor: "#f5f5f5",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: "1rem" }}
            >
              Last Messages
            </Typography>
            {"chat"}
          </Paper>

          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "100%", sm: "50%" },
              position: "relative",
              maxWidth: "25rem",
            }}
          >
            {"Dougnut Chart"}
          <Stack 
           position={"absolute"}
           direction={"row"}
           justifyContent={"center"}
           alignItems={"center"}
           spacing={"0.5rem"}
           width={"100%"}
           height={"100%"}
          >
            <GroupIcon/>
            <Typography>Vs</Typography>
            <PersonIcon/>

          </Stack>
          </Paper>
        </Stack>

        {Widgets}
      </Container>
    </AdminLayout>
  );
};

// const Widget = ({title,value,Icon}) => <Paper>
//     <Stack alignItems={"center"} spacing={"1rem"}>
//         <Typography>{value}</Typography>
//         <Stack>{Icon}</Stack>
//         <Typography>{title}</Typography>
//     </Stack>
// </Paper>

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Widget = ({ title, value, Icon }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Paper
      elevation={6}
      sx={{
        padding: "2rem",
        borderRadius: "1rem",
        textAlign: "center",
        width: "100%",
        maxWidth: isSmallScreen ? "100%" : "20rem",
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <Stack alignItems="center" spacing="1rem">
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: theme.palette.primary.main,
          }}
        >
          {value}
        </Typography>
        <Stack
          sx={{
            fontSize: "3rem",
            color: theme.palette.secondary.main,
          }}
        >
          {Icon}
        </Stack>
        <Typography
          variant="h6"
          sx={{
            color: "rgba(0, 0, 0, 0.7)",
            fontWeight: "medium",
          }}
        >
          {title}
        </Typography>
      </Stack>
    </Paper>
  );
};



export default Dashboard;
