import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import PostComponent from './PostComponent'
import { initLS, getPostsFromLS } from '../services/savingService'
import ModalNewPostComponent from './ModalNewPostComponent'
import ModalPostComponent from './ModalPostComponent'

export default class GalleryComponent extends Component {
    state = { postModalShown: false, selectedPost: null }
    addPost = () => this.setState();
    showPost = () => this.setState({ postModalShown: true });
    cardOnClick = (post) => this.setState({ selectedPost: post, postModalShown: true });
    closeModal = () => { this.setState({ postModalShown: false })}

    render() {
        if (!localStorage['photoPosts']) { initLS(); }

        return (
            <div className='page-content'>
                <ModalNewPostComponent addNewPost={ this.addPost } />
                <ModalPostComponent
                    isShown={ this.state.postModalShown && !!this.state.selectedPost }
                    close={ this.closeModal }
                    post={ this.state.selectedPost }
                />
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
                                    <PostComponent post={p} cardOnClick={() => this.cardOnClick(p) } />
                                </Grid.Column>)
                        )
                    }
                </Grid>
            </div>
        )
    }
}
