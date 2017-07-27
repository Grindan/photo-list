import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import PostComponent from './PostComponent'
import { initLS, getPostsFromLS } from '../services/savingService'
import ModalNewPostComponent from './ModalNewPostComponent'
import ModalPostComponent from './ModalPostComponent'

export default class GalleryComponent extends Component {
    state = { postModalShown: false }
    addPost = () => this.setState();
    showPostModal = () => this.setState({ postModalShown: true });

    render() {
        if (!localStorage['photoPosts']) {
            initLS();
        }

        console.log('gallery render');
        return (
            <div className='page-content'>
                <ModalNewPostComponent addNewPost={ this.addPost } />
                <ModalPostComponent isShown={ this.state.postModalShown } link={ this.state.photoLink } />
                <h1>Gallery</h1>
                <Grid doubling columns={4}>
                    {
                        getPostsFromLS()
                            .sort((a,b) => {
                                if (a.date > b.date) { return 1 }
                                else { return -1; }
                            })
                            .map(p =>
                                (<Grid.Column className='post-card animated fadeInUp'>
                                    <PostComponent post={p} showPost={ this.showPostModal }/>
                                </Grid.Column>)
                        )
                    }
                </Grid>
            </div>
        )
    }
}
