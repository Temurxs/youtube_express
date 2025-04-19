const express = require("express")
const app = express()
const videosRouter = require("./router/videosRouter")
const channelsRouter = require("./router/channelsRouter")
const authRouter = require("./router/auth.router")
const commentRouter = require("./router/commentRouter")




app.use(express.json())
app.use("/videos", videosRouter)
app.use("/channels", channelsRouter)
app.use( "/login", authRouter)
app.use("/comments", commentRouter)



app.listen(2000)