import { Router } from "express";
import subjectController from "../controllers/subject.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { requireRole } from "../middlewares/requireRole.middleware";

const router = Router();


router.get('/', checkRole(['admin']), controller.getSubjects);

// Obtener todas las materias (todos los roles)
router.get("/", authMiddleware, subjectController.all);

export default router;
