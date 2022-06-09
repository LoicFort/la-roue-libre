import express from 'express';
const app = express();
const router = express.Router();

// app.use(bodyParser.json());
express.urlencoded({extended: true});

import mainController from './controllers/mainController.js';
import adminController from './controllers/adminController.js';



router.get('/', mainController.showMainPage);
router.get('/admin', adminController.showLogin);
// router.get('/updateData', mainController.getMonthAndNextMonth);
router.post('/admin', adminController.login);
router.post('/events', adminController.login);
router.get('/deleteEvent/:id', adminController.deleteOneEvent);
router.post('/checkdata', adminController.showData);

router.get('/la-roue-libre', mainController.showMainPage);
router.post('/la-roue-libre', adminController.editMainPage);

export default router;
