const express = require("express")
const channelsRouter = express.Router()
const { getAllChannels, getChannelById, postChannel, updateChannel, deleteChannel } = require("../controller/channelsController")

channelsRouter.get("/", getAllChannels)
channelsRouter.get("/:id", getChannelById)
channelsRouter.post("/", postChannel)
channelsRouter.put("/", updateChannel)
channelsRouter.delete("/:id", deleteChannel)

module.exports = channelsRouter