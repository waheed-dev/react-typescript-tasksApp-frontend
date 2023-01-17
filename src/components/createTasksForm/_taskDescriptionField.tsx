import {FC, ReactElement} from "react";
import {TextField} from '@mui/material'
import {ITextField} from './interfaces/ITextField'

 const TaskDescriptionField : FC<ITextField> = (props) :ReactElement => {
     const {disabled = false,onChange = (e) => console.log(e.target.value)} = props
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
            disabled={disabled}
            onChange={onChange}
        />
    )
}

export default TaskDescriptionField