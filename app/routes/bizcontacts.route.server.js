import { Router } from "express";

import { DisplayBizContactsList,
    DisplayBizContactsEditPage,
    ProcessBizContactsEditPage,
    ProcessBizContactsDelete } from "../controllers/bizcontacts.controller.server.js";

const router = Router();


router.get('/bizcontacts-list', DisplayBizContactsList);
router.post('/bizcontacts-edit/:id', ProcessBizContactsEditPage);
router.get('/bizcontacts-edit/:id', DisplayBizContactsEditPage);
router.get('/bizcontacts-delete/:id', ProcessBizContactsDelete);

export default router;