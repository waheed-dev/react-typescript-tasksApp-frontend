import { TaskCounterType } from "../../taskCounter/interfaces/ITaskCounter"
import Status from "../../createTasksForm/enums/status"

export  const emitCorrectBorderColor = (status : TaskCounterType) : string=> {
    switch (status) {
        case Status.todo:
            return 'error.light'
        case Status.completed:
            return 'success.light'
        case Status.inProgress:
            return 'warning.light'
    }
}