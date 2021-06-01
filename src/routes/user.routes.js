import { Router } from 'express'

const router = Router();

import * as userCtr from '../controllers/user.controller'

router.get('/', userCtr.readAllUsers);

export default router;