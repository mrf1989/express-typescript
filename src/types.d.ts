export type Priority = 'low' | 'medium' | 'high'

export interface Task {
  id: number
  date: string
  priority: Priority
  title: string
  description: string
  done: boolean
}

export type NoDateTask = Omit<Task, 'date'>
