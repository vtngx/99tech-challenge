import { Router } from "express";
import * as resourceController from "../controllers/resource.controller";

const router = Router();

router.get("/", resourceController.list);
router.get("/:id", resourceController.get);
router.post("/", resourceController.create);
router.put("/:id", resourceController.update);
router.delete("/:id", resourceController.remove);

export default router;
