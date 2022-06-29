const express = require('express');
const personController = require('../controllers/personController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, personController.getAll);
router.post('/', personController.add);
router.get('/:id', personController.getById);
router.put('/:id', personController.update);
router.delete('/:id', personController.exclude);

module.exports = router;
