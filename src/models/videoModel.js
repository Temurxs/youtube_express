class Video {
    constructor(id,title,thumbnailUrl,duration,uploadTime,views,author,videoUrl,description,subscriber,isLive){
        this.id = id
        this.title = title
        this.thumbnailUrl = thumbnailUrl
        this.duration = duration
        this.uploadTime = uploadTime
        this.views = views
        this.author = author
        this.videoUrl = videoUrl
        this.description = description
        this.subscriber = subscriber
        this.isLive = isLive


    }
}

module.exports = Video