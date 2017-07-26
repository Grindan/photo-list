import Post from '../Post.js'

export default function initIt() {
    var initialPosts = [];

    initialPosts.push(new Post('http://www.free-css.com/assets/files/free-css-templates/preview/page215/magazine/assets/images/pic_1.jpg', 'We Eat and Drink All Night', 'Alex J.'));
    initialPosts.push(new Post('http://www.free-css.com/assets/files/free-css-templates/preview/page215/magazine/assets/images/pic_2.jpg', 'Beef Steak at Guatian Restaurant', 'Rachel R.'));
    initialPosts.push(new Post('http://www.free-css.com/assets/files/free-css-templates/preview/page215/magazine/assets/images/pic_3.jpg', 'An Overlooking River at the East Cost', 'Megan S.'));
    initialPosts.push(new Post('http://www.free-css.com/assets/files/free-css-templates/preview/page215/magazine/assets/images/pic_4.jpg', 'A Wildlife In The Mountain of India', 'Lewis K.'));
    initialPosts.push(new Post('http://www.free-css.com/assets/files/free-css-templates/preview/page215/magazine/assets/images/pic_5.jpg', 'We Took A Photo', 'Tom R.'));
    initialPosts.push(new Post('http://www.free-css.com/assets/files/free-css-templates/preview/page215/magazine/assets/images/pic_6.jpg', 'A Modernize Huge and Beautiful Building', 'Daniel O.'));
    initialPosts.push(new Post('http://www.free-css.com/assets/files/free-css-templates/preview/page215/magazine/assets/images/pic_7.jpg', 'Enjoying the Native Juice Drink in Brazil', 'Alice K.'));
    initialPosts.push(new Post('http://www.free-css.com/assets/files/free-css-templates/preview/page215/magazine/assets/images/pic_8.jpg', 'Boat Travel in The Vietnam River', 'Louise G.'));

    localStorage['photoPosts'] = JSON.stringify(initialPosts);
}