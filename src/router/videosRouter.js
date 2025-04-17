const express = require("express")
const videosRouter = express.Router()
const {getAllVideos, getVideoById, postVideo, updateVideo, deleteVideo} = require("../controller/videosController.js")


videosRouter.get("/", getAllVideos)
videosRouter.get("/:id", getVideoById)

videosRouter.post("/", postVideo)
videosRouter.put("/", updateVideo)
videosRouter.delete("/:id", deleteVideo)


module.exports = videosRouter
