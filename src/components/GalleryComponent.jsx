import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux';

import PostComponent from './PostComponent'

import ModalNewPostComponent from './ModalNewPostComponent'
import ModalPostComponent from './ModalPostComponent'

class GalleryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { postModalShown: false, selectedPost: null }
    }
    addPost = () => this.setState();
    showPost = () => this.setState({ postModalShown: true });
    cardOnClick = (post) => this.setState({ selectedPost: post, postModalShown: true });
    closeModal = () => { this.setState({ postModalShown: false })}

    render() {
        console.log('gallery render');
        const posts = this.props.posts || [];

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
                        posts.map((p, i) => (<PostComponent key={i} post={p} cardOnClick={() => this.cardOnClick(p) } />))
                    }
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    console.log('Gallery: mapStateToProps');
    console.log(store);
    return {
        posts: store.posts
    }
}

export default connect(mapStateToProps, null)(GalleryComponent);
