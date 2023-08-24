const express = require('express');
const router = express.Router();
const reward = require('./reward');
const contact = require('./contact');
const media = require('./media');

const defaultRoutes = [
    {
        path: '/reward',
        route: reward,
    },
    {
        path: '/contact',
        route: contact,
    },
    {
        path: '/media',
        route: media,
    },    
];


defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;