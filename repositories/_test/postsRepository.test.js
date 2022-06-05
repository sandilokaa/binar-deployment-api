const postsRepository = require("../postsRepository");

// Testing for Create Post

describe("create post", () => {
    it("should create post to db", async () => {
        const postToCreate = {
            user_id: 1,
            title: "Judul Post Baru",
            description: "Deskripsi Post Baru",
        };

        const createdPost = await postsRepository.create(postToCreate);

        // Assertion
        expect(createdPost.user_id).toEqual(postToCreate.user_id);
        expect(createdPost.title).toEqual(postToCreate.title);
        expect(createdPost.description).toEqual(postToCreate.description);
    
        // Delete Test Data
        await postsRepository.deleteById({id: createdPost.id});
    });
});

// Testing for Get By Id

describe("get post by id", () => {
    it("should create post to db", async () => {
      // Create Data
        const postToCreate = {
            user_id: 1,
            title: "Judul Post Baru Banget",
            description: "Deskripsi Post Baru Banget",
        };

        const createdPost = await postsRepository.create(postToCreate);
    
        const post = await postsRepository.getPostById({ id: createdPost.id });
    
        expect(post.user_id).toEqual(createdPost.user_id);
        expect(post.title).toEqual(createdPost.title);
        expect(post.description).toEqual(createdPost.description);
    
        // Delete Test Data
        await postsRepository.deleteById({ id: createdPost.id });
    });
});


// Testing for Delete Post

describe("delete post", () => {
    it("should create post to db", async () => {
        const postToCreate = {
            user_id: 1,
            title: "Judul Post Baru",
            description: "Deskripsi Post Baru",
        };

        const deletedPost = await postsRepository.create(postToCreate);

        const post = await postsRepository.deleteById({id: deletedPost.id});
    });
});


// Testing for Update Post

describe("update post", () => {
    it("should create post to db", async () => {
        const postToCreate = {
            user_id: 1,
            title: "Judul Post Baru Banget",
            description: "Deskripsi Post Baru Banget",
        };

        const updatedPost = await postsRepository.create(postToCreate);

        const post = await postsRepository.updateById({id: updatedPost.id});
    
        // Delete Test Data
        await postsRepository.deleteById({id: updatedPost.id});
    });
});