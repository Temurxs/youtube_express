const { v4 } = require("uuid")
const Io = require("../utils/Io.js")
const comments = new Io("./database/comments.json")
const commentModel = require("../models/commentModel.js")


const getComment = async (req,res) => {
     const comment = await comments.read()
     const {videoId} = req.query
     const data = comment.filter( comment => comment.videoId === videoId)
     res.send(data)
}

const postComment = async (req,res) => {
    const {username,message, videoId} = req.body
    const date = new Date()
    const newComment = new commentModel( v4(), username, message, date, videoId)
    const comment = await comments.read()
    comment.push(newComment)
    comments.write(comment)
    res.send("Added successsfully")

}

const editComment = async (req,res) => {
    const comment = await comments.read()
    const {id,message} = req.body
    const editedComment = comment.map( comment => comment.id === id? {...comment,id,message}: comment)
    comments.write(editedComment)
    res.send("Edited successfully")
}

const deleteComment = async (req,res) => {
    const id = req.params.id
    const comment = await comments.read()
    const data = comment.filter( comment => comment.id != id)
    comments.write(data)
    res.send("Deleted successfully")
}

module.exports = {
    getComment,postComment,editComment,deleteComment
}

