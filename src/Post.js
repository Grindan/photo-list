export default class Post {
    constructor(link, author = 'anonymous', description = '') {
        this.link = link;
        this.author = author;
        this.description = description;
        this.time = new Date();
    }
}
