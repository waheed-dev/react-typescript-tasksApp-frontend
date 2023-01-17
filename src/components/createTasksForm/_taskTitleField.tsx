import {FC, ReactElement} from "react";
import {TextField} from '@mui/material'
import { ITextField} from './interfaces/ITextField'

 const TaskTitleField : FC<ITextField> = (props) :ReactElement => {
    const {disabled = false,onChange = (e) => console.log(e.target.value)} = props
  return (
      <TextField
      id={'title'}
      label={'Task Title'}
      placeholder={'Task Title'}
      variant={'outlined'}
      size={'small'}
      name={'title'}
      fullWidth
      disabled={disabled}
      onChange={onChange}
      />
  )
}

export default TaskTitleField
