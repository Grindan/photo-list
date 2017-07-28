export default class Post {
    constructor(link, author, description) {
        this.link = link;
        this.author = author ? author : 'anonymous';
        this.description = description ? description : 'photo post';
        this.date = new Date();
    }
}
