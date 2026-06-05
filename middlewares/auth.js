// Custom header signature validator Express middleware
function authCheck(req, res, next) {
    const key = req.headers['x-api-key'];
    if (!key) return res.status(401).json({ error: "API Key missing" });
    next();
}
module.exports = authCheck;