class Channel {
    constructor(id, name, avatarUrl, subscribers, createdAt, description, verified) {
      this.id = id;
      this.name = name;
      this.avatarUrl = avatarUrl;
      this.subscribers = subscribers;
      this.createdAt = createdAt;
      this.description = description;
      this.verified = verified;
    }
  }
  
  module.exports = Channel;
  