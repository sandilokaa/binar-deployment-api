const postsService = require("../postsService");

// // Testing for Create Post

describe("create post", () => {
    it("should create post to db", async () => {
        // Create payload
        const postToCreate = {
            user_id: 1,
            title: "Judul Post Baru Banget",
            description: "Deskripsi Post Baru Banget",
        };

        // Expected Response
        const expectedCreatedPost = {
            id: 999,
            user_id: 1,
            title: "Judul Post Baru Banget",
            description: "Deskripsi Post Baru Banget",
        };

        const expectedCreatedPostService = {
            status: true,
            status_code: 201,
            message: "Post created successfully",
            data: {
                created_posts: expectedCreatedPost,
            },
        };

        // Create service mock function
        const mockPostService = postsService;

        mockPostService.create = jest
            .fn()
            .mockImplementation(() => Promise.resolve(expectedCreatedPostService));
        const createdPostResponse = await mockPostService.create(postToCreate);

        // Assertion
        expect(expectedCreatedPostService.status).toEqual(
            createdPostResponse.status
        );
        expect(expectedCreatedPostService.status_code).toEqual(
            createdPostResponse.status_code
        );
        expect(expectedCreatedPostService.message).toEqual(
            createdPostResponse.message
        );
        expect(expectedCreatedPostService.data.created_posts).toEqual(
            createdPostResponse.data.created_posts
        );
    });
});


// Testing for Get By Id

// describe("Get By Id", () => {
//     it("should create post to db", async () => {
//         // Create payload
//         const postToCreate = {
//             user_id: 1,
//             title: "Judul Post Baru Banget",
//             description: "Deskripsi Post Baru Banget",
//         };

//         // Expected Response
//         const expectedCreatedPost = {
//             id: 999,
//             user_id: 1,
//             title: "Judul Post Baru Banget",
//             description: "Deskripsi Post Baru Banget",
//         };

//         const expectedCreatedPostService = {
//             status: true,
//             status_code: 201,
//             message: "Post created successfully",
//             data: {
//                 created_posts: expectedCreatedPost,
//             },
//         };

//         // Create service mock function
//         const mockPostService = postsService;

//         mockPostService.create = jest
//             .fn()
//             .mockImplementation(() => Promise.resolve(expectedCreatedPostService));

//         const createdPostResponse = await mockPostService.create(postToCreate);

//         const getPostById = await mockPostService.getPostById({id: createdPostResponse.id});

//         // Assertion
//         expect(getPostById.status).toEqual(
//             createdPostResponse.status
//         );
//         expect(getPostById.status_code).toEqual(
//             createdPostResponse.status_code
//         );
//         expect(getPostById.message).toEqual(
//             createdPostResponse.message
//         );
//         expect(getPostById.data.created_posts).toEqual(
//             createdPostResponse.data.created_posts
//         );
//     });
// });