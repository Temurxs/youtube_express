const express = require("express")
const videosRouter = express.Router()
const {getAllVideos, getVideoById, postVideo, updateVideo, deleteVideo} = require("../controller/videosController.js")
const { verification } = require("../controller/auth.controller.js")


videosRouter.get("/", getAllVideos)
videosRouter.get("/:id", getVideoById)

videosRouter.post("/", verification, postVideo)
videosRouter.put("/", verification,updateVideo)
videosRouter.delete("/:id",verification, deleteVideo)


module.exports = videosRouter
