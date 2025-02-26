import express from "express"
import dotenv from "dotenv"
import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"
import commentRouter from "./routes/comment.route.js"
import connectDB from "./lib/connectDB.js"
import webhookRouter from "./routes/webhook.route.js"

dotenv.config();

const app = express()
app.use("/webhooks", webhookRouter);
app.use(express.json())

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

// error handling middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500);

    res.json({
        message: error.message || "Something went wrong!",
        status: error.status
    });
});

app.listen(3000, () => {
    connectDB();
    console.log("Server is running on port 3000")
})