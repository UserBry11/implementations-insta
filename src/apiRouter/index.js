import express from "express";
import { getImages, postImage } from "../controllers";
import swaggerDocsRouter from "../swaggerDocsRouter";

const apiRouter = express.Router();

apiRouter
    .get("/images", getImages)
    .post("/images", postImage)
    .use("/", swaggerDocsRouter);

export default apiRouter;