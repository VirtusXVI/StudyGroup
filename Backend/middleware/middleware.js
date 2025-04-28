export const authMiddleware = async (req, res, next) => {
    console.log("authMiddleware");
    next();
};