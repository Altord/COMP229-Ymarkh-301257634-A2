
/*
* FILE			    :	bizcontacts.route.server.js
* PROJECT			:	COMP229 SEC 402
* PROGRAMMER		:	Yehoshya Markh
* SID               :   301257634
* DATE              :   2022-10-22
*/

import { Router } from "express";

import { DisplayBizContactsList,
    DisplayBizContactsEditPage,
    ProcessBizContactsEditPage,
    ProcessBizContactsDelete } from "../controllers/bizcontacts.controller.server.js";

import { AuthGuard } from "../routes/utils/index.js";

const router = Router();

router.get('/bizcontacts-list', AuthGuard, DisplayBizContactsList);
router.post('/bizcontacts-edit/:id', AuthGuard, ProcessBizContactsEditPage);
router.get('/bizcontacts-edit/:id', AuthGuard, DisplayBizContactsEditPage);
router.get('/bizcontacts-delete/:id', AuthGuard, ProcessBizContactsDelete);

export default router;