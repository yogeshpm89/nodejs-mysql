

const requestLogger = (req, res, next) => {
    req.startTime = new Date();
    console.log(`Request Logger => ${req.method} ${req.originalUrl} ${new Date()}`);
    next();
}

module.exports = requestLogger;