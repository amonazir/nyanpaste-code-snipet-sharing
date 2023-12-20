const passport = require('passport');


//in order to authenticate a route
const authMiddleware = async (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user) => {
        if (err) return next(err);
        if (!user) return res.status(401).json({ message: 'Unauthorized' });
        req.user = user;
        next();
    })(req, res, next);
};

module.exports = authMiddleware;
