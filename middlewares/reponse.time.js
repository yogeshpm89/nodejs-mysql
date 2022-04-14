

const responseTime = (req, res, next) => {
    const startTime = req.startTime;
    const endTime = new Date();
    const data = req.data;
    const status = req.status;
    console.log(`Response Time => ${req.method} ${req.originalUrl} ${endTime - startTime}`);
    res.status(status).json({
        data: data
    });
};

module.exports = responseTime;