const router = require('express').Router();
router.get('/hello', (req, res) => {
 res.json(["Hello!"]);
});
module.exports = router;


router.get('/hello', (req, res) => {
 res.json(["Hello!", req.user]);
});
module.exports = router;