const express = require('express');
const profController = require('../../../controllers/profController');
const router = express.Router({});

router.get('/users-prof-details', profController.getUsersProfList);
router.post('/user-prof-details', profController.createNewUserProf);
router.put('/user-prof-details/:id', profController.updateUserProfDetails);
router.delete('/user-prof-details/:user_id', profController.deleteUserProfDetails);

module.exports = router;
