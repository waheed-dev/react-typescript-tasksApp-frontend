import {FC,ReactElement} from "react";
import {Box,Typography} from '@mui/material'
import {ITaskDescription} from './interfaces/ITaskDescription'
export const TaskDescription : FC<ITaskDescription> = (props): ReactElement => {
    const {description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, omnis!'} = props
    return (
        <Box>
            <Typography>{description}</Typography>
        </Box>
    )
}