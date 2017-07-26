import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import PostComponent from './PostComponent'
// import Post from '../Post'
import initIt from '../services/init'

export default class GalleryComponent extends Component {
    // state = {}

    // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        // const { activeItem } = this.state

        if (!localStorage['photoPosts']) {
            initIt();
        }

        var posts = JSON.parse(localStorage['photoPosts']);

        console.log('list render');
        return (
            <div className='page-content'>
                <h1>Gallery</h1>
                <Grid doubling columns={4}>
                    {
                        posts
                            .sort((a, b) => a - b)
                            .map(p =>
                                (<Grid.Column className='post-card animated fadeInUp'>
                                    <PostComponent post={p}/>
                                </Grid.Column>)
                        )
                    }
                </Grid>
            </div>
        )
    }
}
