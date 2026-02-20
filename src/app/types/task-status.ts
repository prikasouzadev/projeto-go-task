import { TaskStatusEnum } from "../enum/task-status.enum";


export type TaskStatus =
  | TaskStatusEnum.TODO
  | TaskStatusEnum.DOING
  | TaskStatusEnum.DONE;