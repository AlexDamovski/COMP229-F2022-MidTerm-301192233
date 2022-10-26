import { Router } from 'express';
import {DisplayHomePage} from '../controllers/index.js';

const router = Router();



/* Display home page. */
router.get('/', DisplayHomePage);

/* Display home page. */
router.get('/home', DisplayHomePage);

export default router;