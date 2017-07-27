import Post from '../Post.js'

function initLS() {
    var initialPosts = [];
    initialPosts.push(new Post('http://www.free-css.com/assets/files/free-css-templates/preview/page215/magazine/assets/images/pic_1.jpg', 'Alex J.', 'We Eat and Drink All Night'));
    initialPosts.push(new Post('http://www.free-css.com/assets/files/free-css-templates/preview/page215/magazine/assets/images/pic_2.jpg', 'Rachel R.', 'Beef Steak at Guatian Restaurant'));
    initialPosts.push(new Post('http://www.free-css.com/assets/files/free-css-templates/preview/page215/magazine/assets/images/pic_3.jpg', 'Megan S.', 'An Overlooking River at the East Cost'));
    initialPosts.push(new Post('http://www.free-css.com/assets/files/free-css-templates/preview/page215/magazine/assets/images/pic_4.jpg', 'Lewis K.', 'A Wildlife In The Mountain of India'));
    initialPosts.push(new Post('http://www.free-css.com/assets/files/free-css-templates/preview/page215/magazine/assets/images/pic_5.jpg', 'Tom R.', 'We Took A Photo'));
    initialPosts.push(new Post('http://www.free-css.com/assets/files/free-css-templates/preview/page215/magazine/assets/images/pic_6.jpg', 'Daniel O.', 'A Modernize Huge and Beautiful Building'));
    initialPosts.push(new Post('http://www.free-css.com/assets/files/free-css-templates/preview/page215/magazine/assets/images/pic_7.jpg', 'Alice K.', 'Enjoying the Native Juice Drink in Brazil'));
    initialPosts.push(new Post('http://www.free-css.com/assets/files/free-css-templates/preview/page215/magazine/assets/images/pic_8.jpg', 'Louise G.', 'Boat Travel in The Vietnam River'));
    localStorage['photoPosts'] = JSON.stringify(initialPosts);
}

function addPostToLS(post) {
    var posts = JSON.parse(localStorage['photoPosts'] || '[]');
    posts.push(post);
    localStorage['photoPosts'] = JSON.stringify(posts);
}

function getPostsFromLS() {
    return JSON.parse(localStorage['photoPosts'] || '[]');
}

export { initLS, addPostToLS, getPostsFromLS }