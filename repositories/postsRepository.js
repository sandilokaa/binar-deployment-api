const {
    posts
} = require("../models");

class postsRepository {
    static async getAllPosts() {
        const getAllPostsData = await posts.findAll();
        return getAllPostsData;
    };

    static async create({
        user_id,
        title,
        description,
        picture
    }) {
        const createdUser = posts.create({
            user_id,
            title,
            description,
            picture
        });

        return createdUser;
    };

    static async getPostById({
        id
    }) {
        const getPost = await posts.findOne({
            where: {
                id
            }
        });

        return getPost;
    };

    static async deleteById({
        id
    }) {
        const getPosts = posts.destroy({
            where: {
                id
            }
        });

        return getPosts;
    };

    static async updateById({
        id,
        title,
        description,
        picture
    }) {
        const updateById = await posts.update({
            title,
            description,
            picture
        }, {
            where: {
                id
            }
        });
        return updateById;
    };
};

module.exports = postsRepository;