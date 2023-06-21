import { Task, NoDateTask, NewTask } from '../types'
import tasksData from '../data/tasks.json'

const tasks: Task[] = tasksData as Task[]

export const getTasks = (): Task[] => tasks

export const findById = (id: number): NoDateTask | undefined => {
  const task = tasks.find(task => task.id === id)
  if (task != null) {
    const { date, ...restOfTask } = task
    return restOfTask
  }
  return undefined
}

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

export const addTask = (task: NewTask): Task => {
  const newTask = {
    id: Math.max(...tasks.map(task => task.id)) + 1,
    ...task,
    date: new Date().toISOString(),
    done: false
  }
  tasks.push(newTask)
  return newTask
}
