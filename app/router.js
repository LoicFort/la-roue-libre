const express = require('express');
const app = express();
const router = express.Router();

express.urlencoded({extended: true});

const mainController = require('./controllers/mainController');
const adminController = require('./controllers/adminController');


router.get('/', mainController.showHomePage);
router.get('/admin', adminController.showLogin);
// router.post('/admin', adminController.login);
router.post('/events', adminController.login);
router.post('/checkdata', adminController.showData);
router.get('/la-roue-libre', mainController.showMainPage);
router.post('/la-roue-libre', adminController.editMainPage);

module.exports = router;
