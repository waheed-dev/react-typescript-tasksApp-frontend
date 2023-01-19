import {Priority} from '../../createTasksForm/enums/priority'

export const renderPriorityBasedBorderColor = (priority : string) => {
    switch (priority) {
        case Priority.normal:
            return 'grey.900';
        case Priority.low:
            return 'info.light';
        case Priority.high:
            return 'error.light';
        default:
            return 'grey.900'

    }
}