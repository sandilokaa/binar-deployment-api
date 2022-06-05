const usersService = require("../services/usersService")

const getPostByUserId = async (req, res, next) => {
    const {
        id
    } = req.params;

    const {
        status,
        status_code,
        message,
        data
    } =
    await usersService.getPostByUserId({
        id,
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

const deleteByID = async (req, res, next) => {
    const {
        id
    } = req.params;

    const {
        status,
        status_code,
        message,
        data
    } = await usersService.deleteByID({
        id,
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

module.exports = {
    getPostByUserId,
    deleteByID
};