export default class Post {
    constructor(link, author, description = 'photo post') {
        this.link = link;
        this.author = author ? author : 'anonymous';
        this.description = description;
        this.date = new Date();
    }
}
