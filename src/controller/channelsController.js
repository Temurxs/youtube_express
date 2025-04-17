const { v4 } = require("uuid")
const Io = require("../utils/Io.js")
const Channels = new Io("./database/channels.json")
const channelModel = require("../models/channelModel.js")

const getAllChannels = async (req, res) => {
    const key = req.query.key
    const channels = await Channels.read()
    if (key) {
        const filteredChannels = channels.filter(channel => channel.name.toLowerCase().includes(key.toLowerCase()) || channel.description.toLowerCase().includes(key.toLowerCase()))
        res.send(filteredChannels)
    } else {
        res.send(channels)
    }
}

const getChannelById = async (req, res) => {
    const channel = await Channels.read()
    const id = req.params.id
    const channelById = channel.find(channel => channel.id == id)
    res.send(channelById)
}

const postChannel = async (req, res) => {
    const { name, avatarUrl, subscribers, createdAt, description, verified } = req.body
    const newChannel = new channelModel(v4(), name, avatarUrl, subscribers, createdAt, description, verified)
    const channel = await Channels.read()
    channel.push(newChannel)
    Channels.write(channel)
    res.send("New channel has been added")
}

const updateChannel = async (req, res) => {
    const { id, name, avatarUrl, subscribers, createdAt, description, verified} = req.body
    const channel = await Channels.read()
    const Updated = channel.map(channel => channel.id == id ? { ...channel, id, name, avatarUrl, subscribers, createdAt, description, verified} : channel)
    Channels.write(Updated)
    res.send("Channel has been edited")
}

const deleteChannel = async (req, res) => {
    const id = req.params.id
    const channel = await Channels.read()
    const afterDeleted = channel.filter(channel => channel.id != id)
    Channels.write(afterDeleted)
    res.send("Channel has been deleted")
}
module.exports = {
     getAllChannels,getChannelById,postChannel,updateChannel, deleteChannel
}