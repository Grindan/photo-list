import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import PostComponent from './PostComponent'
import { initLS, getPostsFromLS, getLSLength } from '../services/savingService'

export default class GalleryComponent extends Component {
    state = { LSlength: 0 }
    componentDidMount() {
        console.log('componentDidMount function');
        var self = this;
        setInterval(() => {
            console.log('check LS: begin');
            if (self.state.LSlength != getLSLength()) {
                console.log('check LS: need update');
                self.forceUpdate();
            } else { console.log('check LS: need not in update') }
        }
        , 100);
    }

    render() {
        // const { activeItem } = this.state

        if (!localStorage['photoPosts']) {
            initLS();
        }

        console.log('gallery render');
        return (
            <div className='page-content'>
                <h1>Gallery</h1>
                <Grid doubling columns={4}>
                    {
                        getPostsFromLS()
                            .sort((a, b) => a.date - b.date)
                            .map(p =>
                                (<Grid.Column className='post-card animated fadeInUp'>
                                    <PostComponent post={p}/>
                                </Grid.Column>)
                        )
                    }
                </Grid>
                { this.setState({ LSlength: localStorage['photoPosts'].length }) }
            </div>
        )
    }
}
