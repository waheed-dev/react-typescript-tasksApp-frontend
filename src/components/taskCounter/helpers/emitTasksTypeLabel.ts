import { TaskCounterType } from "../../taskCounter/interfaces/ITaskCounter"
import Status from "../../createTasksForm/enums/status"

export  const emitTasksTypeLabel = (status : TaskCounterType) : string=> {
    switch (status) {
        case Status.todo:
            return "Todo's"
        case Status.completed:
            return 'Completed'
        case Status.inProgress:
            return 'In-Progress'
    }
}