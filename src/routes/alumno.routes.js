import { Router } from 'express'

const router = Router();

import * as alumnosCtr from '../controllers/alumno.controller'

router.get('/', alumnosCtr.readAllAlumnos);
router.get("/:id", alumnosCtr.readAlumno);
router.delete("/:id", alumnosCtr.delAlumno)
router.post("/", alumnosCtr.createAlumno);
router.put("/:id", alumnosCtr.updateAlumno)

export default router;