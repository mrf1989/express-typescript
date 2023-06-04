import express from 'express'
import * as taskServices from '../services/tasks'

const router = express.Router()

router.get('/', (_, res) => {
  res.send(taskServices.getTasks())
})

router.post('/', (_, res) => {
  res.send('Post new task')
})

export default router
