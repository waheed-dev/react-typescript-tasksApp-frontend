import {ReactElement, FC} from "react";
import {Avatar,Box,Typography} from '@mui/material'
import {ITaskCounter} from './interfaces/ITaskCounter'
import Status from '../createTasksForm/enums/status'
import { emitCorrectBorderColor } from "./helpers/emitColorBorder";
import { emitTasksTypeLabel } from "./helpers/emitTasksTypeLabel";

const TaskCounter : FC<ITaskCounter> = (props) :ReactElement => {
  const {count = 9,status = Status.todo } = props
  return <>
    <Box  display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
    <Avatar sx={{
      backgroundColor : "transparent",
      border : '5px solid',
      width : '96px',
      height : '96px',
      marginBottom : '16px',
      borderColor : `${emitCorrectBorderColor(status)}`
    }}>
      <Typography color={'#ffffff'} variant={'h4'}>
        {count}
      </Typography>

    </Avatar>
      <Typography
          color={'#ffffff'}
          variant={'h5'}
          fontWeight={'bold'}
          fontSize={'20px'}
      >{emitTasksTypeLabel(status)}</Typography>
    </Box>
  </>
}

export default TaskCounter