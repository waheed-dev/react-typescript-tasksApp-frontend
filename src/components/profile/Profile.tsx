import {FC, ReactElement} from "react";
import {Box,Typography,Avatar} from '@mui/material'

interface IProfile {
    name : string
}
const Profile : FC<IProfile> = (props ) :ReactElement => {
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
              {`${props.name.substring(0,1)}`}
          </Typography>
        </Avatar>
          <Typography variant={'h6'} color={'text.primary'}>Welcome,{props.name}</Typography>
          <Typography variant={'body1'} color={'text.primary'}>Your personal tasks manager</Typography>
      </Box>
  )
}

export default Profile