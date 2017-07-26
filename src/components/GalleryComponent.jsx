import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { Link } from 'react-router'
import PostComponent from './PostComponent'
import Post from '../Post'

export default class GalleryComponent extends Component {
    // state = {}

    // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        // const { activeItem } = this.state
        var postsList = [];
        postsList.push(new Post('https://i.stack.imgur.com/7mzgv.png', 'author1', 'desc1'));
        postsList.push(new Post('https://i.stack.imgur.com/XVH1c.png', 'author2', 'desc2'));
        postsList.push(new Post('https://s-media-cache-ak0.pinimg.com/736x/a3/3f/86/a33f86fcd8edba60c037318f43346c6d--plitvice-lakes-national-park-croatia-travel.jpg', 'author2', 'desc2'));
        console.log('list render');
        return (
            <div className='page-content'>
                <h2>Gallery</h2>
                {/*<Link to='/newPost'><Button className='btn-plus'>New</Button></Link>*/}
                <Grid doubling columns={5}>
                    {
                        postsList.map(p =>
                            (<Grid.Column className='post-card'>
                                <PostComponent post={p} />
                            </Grid.Column>)
                        )
                    }
                    {/*<Grid.Column className='post-card'>
                        <PostComponent post={postsList[0]} />
                    </Grid.Column>
                    <Grid.Column className='post-card'>
                        <PostComponent post={postsList[1]} />
                    </Grid.Column>
                    <Grid.Column className='post-card'>
                        <PostComponent post={postsList[1]} />
                    </Grid.Column>*/}
                </Grid>
            </div>
        )
    }
}
