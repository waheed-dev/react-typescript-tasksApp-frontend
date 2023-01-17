import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import {FC, ReactElement} from "react";
import { TextField } from '@mui/material';
import {IDateField} from './interfaces/IDateField'
const TaskDatePicker : FC<IDateField> = (props) : ReactElement => {
    const {value= new Date(),disabled = false,onChange= (s) => console.log(s)} = props
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} >
        <DesktopDatePicker
            label={'Task Date'}
            inputFormat={'dd/MM/yyyy'}
            value={value}
            disabled={disabled}
            onChange={onChange}
            renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
    )
}

export default TaskDatePicker