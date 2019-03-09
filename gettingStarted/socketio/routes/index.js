const router = require('express').Router();

router.get('/', (req, res) => {
    res.render("index", {
        title: "Home"
    })

})

router.post('/', (req, res) => {
    
})
module.exports = router;