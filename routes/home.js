const express = require('express');
const router = express();


router.get('/', (req, res) => {
    var currentdate = new Date();
    if (8 <= Number(currentdate.getHours()) && Number(currentdate.getHours()) < 17) {
        res.sendFile(process.cwd() + '\\public\\home.html')
    } else {
        res.sendFile(process.cwd() + '\\public\\errorpage.html')
    };
});

module.exports.router = router;