class CommentModel {
    constructor(id,username,message,date, videoId){
        this.id = id
        this.username = username
        this.message = message
        this.date = date
        this.videoId = videoId
    }
}

module.exports = CommentModel