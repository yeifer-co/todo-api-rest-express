import { Router } from 'express';

import * as taskController from '@/controllers/task';

const router = Router();

router.route('/')
.get(taskController.allTasks)
.post(taskController.createTask)

router.route('/:id')
.get(taskController.getTask)
.put(taskController.updateTask)
.delete(taskController.deleteTask)

export default router;
