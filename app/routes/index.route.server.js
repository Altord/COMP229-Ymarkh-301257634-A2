// Index Routes
import { Router } from 'express';
import { displayHomePage, 
    displayAboutPage, 
    displayProjectsPage, 
    displayServicesPage, 
    displayContactPage,
    displayLoginPage} from '../controllers/index.controller.server.js'

// Intanciating the router
const router = Router();

// add middleware to connect application
router.get('/',displayHomePage);
router.get('/home',displayHomePage);
router.get('/about', displayAboutPage );
router.get('/projects', displayProjectsPage );
router.get('/services', displayServicesPage );
router.get('/contact', displayContactPage );
router.get('/login', displayLoginPage);

export default router;