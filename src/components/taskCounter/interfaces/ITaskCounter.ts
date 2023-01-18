import Status from '../../createTasksForm/enums/status'

export type TaskCounterType = Status.todo | Status.completed | Status.inProgress
export interface ITaskCounter {
    count? : number
    status? : TaskCounterType

}