const express = require("express")
const { getComment, postComment, editComment, deleteComment } = require("../controller/commentController")
const { verification } = require("../controller/auth.controller")
const commentRouter = express.Router()




commentRouter.get("/", getComment)
commentRouter.post("/",verification,  postComment)
commentRouter.put("/",verification ,editComment)
commentRouter.delete("/:id", verification, deleteComment)


module.exports = commentRouter