import {FC, ReactElement} from "react";
import {Box,Typography,Avatar} from '@mui/material'
const Profile : FC = () :ReactElement => {
  return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <Avatar
        sx={{
            width : '96px',
            height : '96px',
            backgroundColor : 'primary.main',
            marginBottom : '16px'
        }}
        >
          <Typography variant={'h4'} color={'text.primary'}>
              W
          </Typography>
        </Avatar>
          <Typography variant={'h6'} color={'text.primary'}>Welcome, Waheed</Typography>
          <Typography variant={'body1'} color={'text.primary'}>Your personal tasks manager</Typography>
      </Box>
  )
}

export default Profile