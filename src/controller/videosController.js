const { v4 } = require("uuid")
const Io = require("../utils/Io.js")
const Videos = new Io("./database/videos.json")
// const channels = new Io("./database/channels.json")
const VideoModel = require("../models/videoModel.js")

const getAllVideos = async (req, res) => {
    const {key, channelId} = req.query
    let videos = await Videos.read()
    if(key){
         videos = videos.filter(video => video.title.toLowerCase().includes(key.toLowerCase()) || video.description.toLowerCase().includes(key.toLowerCase()))
    } 
    
    if(channelId){ 
        videos = videos.filter( video => video.channelId === channelId) 
    } 
   
    res.send(videos)
    
}

const getVideoById = async (req, res) => {
    const videos = await Videos.read()
    const id = req.params.id
    const videoById = videos.find(video => video.id == id)
    res.send(videoById)
}



const postVideo = async (req, res) => {
    const { title, thumbnailUrl, duration, uploadTime, views, author, videoUrl, description, subscriber, isLive } = req.body
    const newVideo = new VideoModel(v4(), title, thumbnailUrl, duration, uploadTime, views, author, videoUrl, description, subscriber, isLive)
    const videos = await Videos.read()
    videos.push(newVideo)
    Videos.write(videos)
    res.send("New video has been added")
}

const updateVideo = async (req, res) => {
    const { id, title, thumbnailUrl, duration, uploadTime, views, author, videoUrl, description, subscriber, isLive } = req.body

    const videos = await Videos.read()
    const Updated = videos.map(video => video.id == id ? { ...video, id, title, thumbnailUrl, duration, uploadTime, views, author, videoUrl, description, subscriber, isLive } : video)
    Videos.write(Updated)
    res.send("Video has been edited")
}

const deleteVideo = async (req, res) => {
    const id = req.params.id
    const videos = await Videos.read()
    const afterDeleted = videos.filter(video => video.id != id)
    Videos.write(afterDeleted)
    res.send("Video has been deleted")
}


module.exports = {
    getAllVideos,
    getVideoById,
    postVideo,
    updateVideo,
    deleteVideo
}


