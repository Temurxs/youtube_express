const express = require("express")
const channelsRouter = express.Router()
const { getAllChannels, getChannelById, postChannel, updateChannel, deleteChannel } = require("../controller/channelsController")
const { verification } = require("../controller/auth.controller")

channelsRouter.get("/", getAllChannels)
channelsRouter.get("/:id", getChannelById)
channelsRouter.post("/",verification, postChannel)
channelsRouter.put("/", verification,updateChannel)
channelsRouter.delete("/:id",verification, deleteChannel)


module.exports = channelsRouter