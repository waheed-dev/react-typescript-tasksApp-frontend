import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {FC, ReactElement} from "react";
import {ISelectField} from './interfaces/ISelectField'

const TaskSelectField : FC<ISelectField> = (props) :ReactElement => {
   const  {value='',
        label = 'Select Box',
        name = 'SelectBox',
        items=[{value : 'sdf',label:'Add Items'}],
        disabled=false,
        onChange= (e :SelectChangeEvent) => {console.log(e)}}= props
    return (
    <FormControl fullWidth size={'small'}>
    <InputLabel id={`${name}-id`}>{label}</InputLabel>
        <Select
        labelId={`${name}-id`}
        id={`${name}-id-select`}
        value={value}
        label={label}
        name={name}
        onChange={onChange}
        disabled={disabled}
        >
            {
                items.map((itm,idx)=> (<MenuItem value={itm.value} key={itm.value+idx}>{itm.label}</MenuItem>))
            }

        </Select>
    </FormControl>
  )
}

export default TaskSelectField

