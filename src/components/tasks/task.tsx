import {FC, ReactElement} from "react";
import {Box} from '@mui/material'
import {TaskHeader} from './_taskHeader'
import {TaskDescription} from './_taskDescription'
import {TaskFooter} from './_taskFooter'
import {ITask} from './interfaces/ITask'
import {Priority} from '../createTasksForm/enums/priority'
import Status from '../createTasksForm/enums/status'
import {renderPriorityBasedBorderColor} from './helpers/renderPriorityBasedBorderColor'
export const Task : FC<ITask> = (props) : ReactElement => {
    const {title= 'test ',
        date = new Date(),
        description= 'ada asd asd d adlsa sf as as',
        priority= Priority.normal,
        status= Status.todo,
        onStatusChange=(e) => {console.log(e)},
        onClick=(e) => {console.log(e)}
    } = props
    return  <Box
        display={'flex'}
        width={'100%'}
        justifyContent={'center'}
        flexDirection={'column'}
        mb={4}
        p={2}
        sx={{
            width : '100%',
            backgroundColor : 'background.paper',
            borderRadius : '8px',
            border : '1px solid',
            borderColor : `${renderPriorityBasedBorderColor(priority)}`
        }}
    >
        <TaskHeader title={title} date={date} />
        <TaskDescription description={description}/>
        <TaskFooter onClick={onClick} onStatusChange={onStatusChange}/>
    </Box>
}