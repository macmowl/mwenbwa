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
import {secure} from "./middleware/secure";
import cors from "cors";
import cookieParser from "cookie-parser";
mongoose.set("useFindAndModify", false);

const {APP_PORT, DB_USER, DB_PASS, DB_NAME} = process.env;

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
app.use(
    cors({
        origin: "http://localhost",
        credentials: true,
    }),
);
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/api/trees", secure, treeRoutes);
app.use("/api/auth", userRoutes);

app.get("*", (req, res) => {
    res.sendFile(path.resolve("./bin/client/index.html"));
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
