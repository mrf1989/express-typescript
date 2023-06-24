export interface Task {
  id: number
  date: string
  priority: Priority
  title: string
  description: string
  done: boolean
}

export type NoDateTask = Omit<Task, "date">

export type NewTask = Omit<Task, "id" | "date" | "done">
