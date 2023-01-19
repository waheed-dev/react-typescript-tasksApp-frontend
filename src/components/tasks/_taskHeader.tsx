import {FC, ReactElement} from "react";
import {Box,Chip,Typography} from '@mui/material'
import {ITaskHeader} from './interfaces/ITaskHeader'
import {format} from 'date-fns'
export const TaskHeader :FC<ITaskHeader> = (props) :ReactElement => {
    const {title= 'default dfdf',date= new Date()} = props
    return  (
        <Box display={'flex'} width={'100%'} justifyContent={'space-between'} mb={3}>
            <Box>
                <Typography variant={'h6'}>{title}</Typography>
            </Box>
            <Box>
                <Chip variant={'outlined'} label={format(date,'PPPp')} />
            </Box>
        </Box>
    )
}

