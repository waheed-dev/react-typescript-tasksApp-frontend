import {FC, ReactElement} from "react";
import {TextField} from '@mui/material'


 const TaskDescriptionField : FC = () :ReactElement => {
    return (
        <TextField
            id={'title'}
            label={'Description'}
            name={'Description'}
            placeholder={'Description'}
            variant={'outlined'}
            size={'small'}
            multiline
            rows={'4'}
            fullWidth
        />
    )
}

export default TaskDescriptionField