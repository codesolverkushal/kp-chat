import { Avatar, IconButton, ListItem, Stack, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add' // Import AddIcon from Material-UI icons
import React from 'react'

const Test = () => {
  return (
    <ListItem>
      <Stack
        direction="row"
        alignItems="center"
        spacing="1rem"
        width="100%"
      >
        <Avatar />
        <Typography
          variant="body1"
          sx={{
            flexGrow: 1, // Corrected from flexGlow to flexGrow
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          Kushal
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
        >
          <AddIcon />
        </IconButton>
      </Stack>
    </ListItem>
  )
}

export default Test
