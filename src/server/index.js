/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import express from "express";
import path from "path";
import mongoose from "mongoose";
import treeRoutes from "./routes/tree.routes";
import userRoutes from "./routes/user.routes";

const {APP_PORT, DB_USER, DB_PASS, DB_NAME} = process.env;
console.log("debug: ", APP_PORT, DB_USER, DB_PASS, DB_NAME);

// Database Connection URL
mongoose.Promise = global.Promise;
mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.raher.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    },
    () => console.log("You are connected to the DB Atlas"),
);
mongoose.connection.on("error", () => {
    throw new Error(`Unable to connect to database`);
});

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});
// Define routes
app.use("/api/trees", treeRoutes);
app.use("/api/users", userRoutes);

app.get("*", (req, res) => {
    res.sendFile(path.resolve("./bin/client/index.html"));
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
