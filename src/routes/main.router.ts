import {Router} from 'express';

const mainRouter =  Router();

mainRouter.get('/status', (req, res) => {
    res.send('Health Check - Server running - Ok');
});

export default mainRouter;