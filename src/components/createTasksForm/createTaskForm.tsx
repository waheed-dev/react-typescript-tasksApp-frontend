import {FC, ReactElement} from "react";
import { Box, Typography,Stack} from '@mui/material'
import TaskTitleField from './_taskTitleField'
import TaskDescriptionField from './_taskDescriptionField'
import TaskDatePicker from './_taskDateField'
import TaskSelectField from './_taskSelectField'
import {Priority} from './enums/priority'
import  Status  from './enums/status'
const CreateTaskForm : FC = () :ReactElement => {

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} width={'100%'} px={4} my={6}>
            <Typography mb={2} component={'h2'} variant={'h6'}>Create a Task</Typography>
            <Stack sx={{width : '100%'}} spacing={2}>
                <TaskTitleField/>
                <TaskDescriptionField/>
                <TaskDatePicker/>
                <Stack direction={'row'} sx={{width : '100%'}} spacing={2}>
                    <TaskSelectField
                        label={'Status'}
                        name={'status'}
                        items={[
                            {
                                value : Status.todo,
                                label : Status.todo.toUpperCase()
                            },
                            {
                                value : Status.completed,
                                label : Status.completed.toUpperCase()
                            },
                            {
                                value : Status.inProgress,
                                label : Status.inProgress.toUpperCase()
                            }
                        ]}
                    />
                    <TaskSelectField
                        label={'Priority'}
                        name={'status'}
                        items={[
                            {
                                value : Priority.normal,
                                label : Priority.normal
                            },
                            {
                                value : Priority.high,
                                label : Priority.high
                            },
                            {
                                value : Priority.low,
                                label : Priority.low
                            }
                        ]}
                    />
                </Stack>
            </Stack>

        </Box>
    )
}
export default CreateTaskForm