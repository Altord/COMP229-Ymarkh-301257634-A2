import { Router } from "express";

import { DisplayBizContactsList } from "../controllers/bizcontacts.controller.server.js";

const router = Router();

router.get('/bizcontacts-list', DisplayBizContactsList);

export default router;