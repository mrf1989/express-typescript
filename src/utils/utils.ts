import { NewTask } from '../types'
import { Priority } from '../enums'

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isPriority = (param: any): boolean => {
  return Object.values(Priority).includes(param)
}

const parseString = (string: any): string => {
  if (!isString(string)) {
    throw new Error('Incorrect or not valid string value')
  } else {
    return string.trim()
  }
}

const parsePriority = (priority: any): Priority => {
  if (!isString(priority) || !isPriority(priority)) {
    throw new Error('Incorrect or not value priority value')
  }

  return priority
}

const toNewTask = (object: any): NewTask => {
  const newTask: NewTask = {
    title: parseString(object.title),
    description: parseString(object.description),
    priority: parsePriority(object.priority)
  }

  return newTask
}

export default toNewTask
