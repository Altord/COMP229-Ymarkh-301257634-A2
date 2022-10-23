/*
* FILE			    :	auth-api.route.server.js
* PROJECT			:	COMP229 SEC 402
* PROGRAMMER		:	Yehoshya Markh
* SID               :   301257634
* DATE              :   2022-10-22
*/

import { Router } from "express";
import { processLogin, processRegistration, processLogout } from "../../controllers/api/auth-api.controller.server.js";

const router = Router();

router.post('/login', processLogin);
router.post('/register', processRegistration);
router.get('/logout', processLogout);

export default router;

