
/*
* FILE			    :	index.route.server.js
* PROJECT			:	COMP229 SEC 402
* PROGRAMMER		:	Yehoshya Markh
* SID               :   301257634
* DATE              :   2022-10-22
*/


// Index Routes
import { Router } from 'express';
import { displayHomePage, 
    displayAboutPage, 
    displayProjectsPage, 
    displayServicesPage, 
    displayContactPage,
    } from '../controllers/index.controller.server.js'

// Intanciating the router
const router = Router();

// add middleware to connect application

router.get('/', displayHomePage);
router.get('/home', displayHomePage);
router.get('/about', displayAboutPage);
router.get('/projects', displayProjectsPage);
router.get('/services', displayServicesPage);
router.get('/contact', displayContactPage);

export default router;