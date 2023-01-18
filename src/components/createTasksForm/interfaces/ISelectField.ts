import {IDisabled} from './IDisabled'
import {SelectChangeEvent} from '@mui/material'

export interface ISelectItem {
    label : string
    value : string
}

export interface ISelectField extends IDisabled{
    name? : string
    value? : string
    label? : string
    onChange : (e : SelectChangeEvent) => void
    items : ISelectItem[]
}