import { Task, NoDateTask } from '../types'
import tasksData from '../data/tasks.json'

const tasks: Task[] = tasksData as Task[]

export const getTasks = (): Task[] => tasks

export const getTasksWithoutDate = (): NoDateTask[] => {
  return tasks.map(({ id, priority, title, description, done }) => {
    return {
      id,
      priority,
      title,
      description,
      done
    }
  })
}

export const addTask = (): undefined => undefined
