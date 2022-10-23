
/*
* FILE			    :	auth.route.server.js
* PROJECT			:	COMP229 SEC 402
* PROGRAMMER		:	Yehoshya Markh
* SID               :   301257634
* DATE              :   2022-10-22
*/

import { Router } from "express";
import { DisplayLoginPage, 
    DisplayRegisterPage, 
    ProcessLoginPage,
    ProcessLogoutPage,
    ProcessRegisterPage} 
    from "../controllers/auth.controller.server.js";

const router = Router();

// Display Login Router
router.get('/login', DisplayLoginPage);
// Process Login Page
router.post('/login', ProcessLoginPage);


// Display Register Router
router.get('/register', DisplayRegisterPage);
// Process Registration Page
router.post('/register', ProcessRegisterPage);

// Process lougout 
router.get('/logout', ProcessLogoutPage);


export default router;