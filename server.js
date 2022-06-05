const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const upload = require("./utils/fileUpload");

const app = express();
const PORT = 2000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Public File Access
app.use("/public/files", express.static(path.join(__dirname, "/storages")));

// Import Controllers
const authController = require("./controllers/authController");
const postsController = require("./controllers/postsController");
const usersController = require("./controllers/usersController");

// import middlewares
const middlewares = require("./middlewares/auth");

// Define Routes

// Auth
app.post("/auth/register", authController.register);
app.post("/auth/login", authController.login);
app.get("/auth/me", middlewares.authenticate, authController.currentUser);

app.post("/auth/login-google", authController.loginGoogle);


// Post
app.get("/posts", postsController.getAllPosts);
app.get("/post/:id", postsController.getPostById);
app.post("/post/create", middlewares.authenticate, upload.single("picture"), postsController.create);
app.delete("/post/delete/:id", middlewares.authenticate, postsController.deleteById);
app.put("/post/update/:id", middlewares.authenticate, upload.single("picture"), postsController.updateById);

app.get("/user/:id/post", usersController.getPostByUserId)


app.listen(PORT, () => {
    console.log(`Server listen on http://localhost:${PORT}`);
});
