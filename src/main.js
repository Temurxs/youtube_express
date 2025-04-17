const express = require("express")
const app = express()
const videosRouter = require("./router/videosRouter")
const channelsRouter = require("./router/channelsRouter")
app.use(express.json())
app.use("/videos", videosRouter)
app.use("/channels", channelsRouter)




app.listen(2000)