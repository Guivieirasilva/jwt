const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController')

router.get('/',auth ,  (req,res) => {

    if (req.user.admin){

        res.send("this data can only be seen by the admin")

    } else {
        res.status(401).send('Not Admin: Acess Denied')

    }

})
router.get('/free', auth, (req, res) => {
    res.send("this data can only be seen by the logged user")

})


module.exports = router;