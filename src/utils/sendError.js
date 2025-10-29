export const sendError = (res, message, status = 400) => {
    return res.status(status).json({
        success: false,
        message
    });
};