import {FC, ReactElement} from "react";
import {Switch,Box,FormControlLabel,Button,Typography} from '@mui/material'
import {ITaskFooter} from './interfaces/ITaskFooter'
 export const TaskFooter : FC<ITaskFooter> = (props) : ReactElement => {
    const {onStatusChange= (e) => {console.log(e)},
        onClick=(e) => {console.log(e)}} = props
  return <Box
  display={'flex'}
  justifyContent={'space-between'}
  alignItems={'center'}
  mt={4}
  >
    <FormControlLabel label={'In Progress'}
     control={<Switch
         onChange={(e) => onStatusChange(e)}
         color={'warning'}/>}
    />
      <Button onClick={(e) =>onClick(e)} sx={{color :'#E5E4E2'}} variant={'contained'} color={'success'} size={'small'}>
       mark complete
      </Button>


  </Box>
}